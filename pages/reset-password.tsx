import Image from 'next/future/image';
import Head from 'next/head';
import React, { KeyboardEvent, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import useFormValidation from '../hooks/useFormValidation';
import resetPasswordSchema from '../schema/resetPAsswordSchema';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Header from '../components/Onboarding/Header';
import LockIcon from '../public/img/resetPass.svg';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import PasswordRequirement from '../components/Onboarding/PasswordRequirement';
import { linstance } from '../helper/axiosFetch';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const ResetPassword = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [passChecks, setPassChecks] = useState({
    UpperCaseCheck: false,
    lowerCaseCheck: false,
    numberCheck: false,
    lenghtCheck: false,
  });

  const { query } = useRouter();
  const code = query.code as string;

  const { handleSubmit, errors, register } =
    useFormValidation(resetPasswordSchema);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const UpperCaseCheck = /[A-Z]/.test(value);
    const lowerCaseCheck = /[a-z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const lenghtCheck = value.length >= 6;

    setPassChecks({
      UpperCaseCheck,
      lowerCaseCheck,
      numberCheck,
      lenghtCheck,
    });
  };

  const style = {
    Wrapper:
      'px-5 py-20 m-auto  rounded-md sm:w-[40rem] sm:p-20 sm:py-10 sm:mt-20 sm:shadow min-h-full',
    iconWrapper: 'w-16 m-auto',
    icon: 'w-full',
    title: 'font-bold text-2xl py-3 text-center',
    message: 'text-gray-dark text-sm text-center',
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);

      const response = await linstance.post('/api/auth/resetPassword', {
        code,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      toast.success(response.data.message);
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
          <Image src={LockIcon} alt="check icon" className={style.icon} />
        </div>

        <h5 className={style.title}>Password Recovery</h5>

        <p className={style.message}>
          A link with password recovery will be sent to your verified email
          address
        </p>

        <section className="relative text-left">
          <Input
            type={showPass ? 'text' : 'password'}
            label="Password"
            {...register('password')}
            errors={errors.password}
            onKeyUp={handleKeyUp}
          />
          <section
            onClick={() => setShowPass((prev) => !prev)}
            className="absolute right-3 top-[1.1rem] text-xl text-gray-dark cursor-pointer"
          >
            {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </section>

          {errors?.password?.type === 'matches' && (
            <PasswordRequirement isValid={passChecks} />
          )}
        </section>

        <Input
          type="password"
          errors={errors.confirmPassword}
          label="Confirm Password"
          {...register('confirmPassword')}
        />

        <Button text="Reset Password" loading={isLoading} />
      </form>
    </>
  );
};

export default ResetPassword;
