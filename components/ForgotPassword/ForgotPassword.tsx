import Image from 'next/future/image';
import Head from 'next/head';
import React, { Dispatch, SetStateAction } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import useFormValidation from '../../hooks/useFormValidation';
import forgotPasswordSchema from '../../schema/forgotPasswordSchema';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Header from '../Onboarding/Header';
import mailIcon from '../../public/img/forgotpass.svg';
import { linstance } from '../../helper/axiosFetch';
import { toast } from 'react-toastify';

interface Props {
  setEmail: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const ForgotPassword = ({
  setEmail,
  setCurrentPage,
  isLoading,
  setIsLoading,
}: Props) => {
  const { handleSubmit, errors, register } =
    useFormValidation(forgotPasswordSchema);

  const style = {
    Wrapper:
      'px-5 py-20 m-auto  rounded-md sm:w-[40rem] sm:p-20 sm:pt-10 sm:mt-20 sm:shadow min-h-full',
    iconWrapper: 'w-28 m-auto',
    icon: 'w-full',
    title: 'font-bold text-2xl pb-2 text-center',
    message: 'text-gray-dark text-sm text-center',
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);

      const response = await linstance.post('/api/auth/forgotPassword', {
        email: data.email,
      });

      setEmail(data.email);
      setCurrentPage(2);
    } catch (error: any) {
      toast.error(error.response?.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Forgotten Password</title>
      </Head>

      <Header />

      <form className={style.Wrapper} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.iconWrapper}>
          <Image src={mailIcon} alt="check icon" className={style.icon} />
        </div>

        <h5 className={style.title}>Password Recovery</h5>

        <p className={style.message}>
          A link with password recovery will be sent to your verified email
          address
        </p>

        <Input
          type="text"
          errors={errors.email}
          label="Email Address"
          {...register('email')}
        />

        <Button text="Reset Password" loading={isLoading} />
      </form>
    </>
  );
};

export default ForgotPassword;
