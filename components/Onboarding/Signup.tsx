import { KeyboardEvent, useState } from 'react';
import Input from '../Input/Input';
import LoginWithGoogle from './LoginWithGoogle';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import signupSchema from '../../schema/signupSchema';
import PasswordRequirement from './PasswordRequirement';
import loadingIcon from '../../public/img/loading.svg';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useFormValidation from '../../hooks/useFormValidation';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import Logo from '../logo/Logo';
import Link from 'next/link';
import Image from 'next/future/image';
import { removeErrorMessage } from '../../Redux/user/userSlice';
import userSignup from '../../Redux/user/asyncThunk/userSignup';
import Head from 'next/head';

const Signup = () => {
  const [showpass, setShowPass] = useState(false);
  const [passChecks, setPassChecks] = useState({
    UpperCaseCheck: false,
    lowerCaseCheck: false,
    numberCheck: false,
    lenghtCheck: false,
  });

  //custom hook
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);
  const { handleSubmit, errors, register } = useFormValidation(signupSchema);

  // password validation
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

  // form submit handler
  const handleSignup: SubmitHandler<FieldValues> = (data) => {
    if (error) {
      dispatch(removeErrorMessage());
    }
    dispatch(userSignup(data));
  };

  return (
    <>
      <Head>
        <title>Create your Axia account</title>
      </Head>

      <section className="py-7 m-auto rounded-md sm:w-[40rem] sm:px-10 sm:mt-16 sm:shadow">
        <Logo margin="m-auto" width={140} />

        <section className=" text-gray-dark text-center p-5">
          Already have an Account?{' '}
          <Link href={'/login'}>
            <a className="text-blue">Login</a>
          </Link>
        </section>

        <LoginWithGoogle signup />

        <section className="border-b border-gray-dark relative mt-10 mx-5">
          <p className="absolute top-[-0.95rem] right-[50%] transform translate-x-[50%] text-sm bg-white p-1 rounded-full border border-gray-dark text-gray-dark">
            OR
          </p>
        </section>

        <form onSubmit={handleSubmit(handleSignup)} className="mx-5">
          {error && (
            <section className="mt-5 p-3 text-center rounded text-red-400 bg-red-100">
              {error}
            </section>
          )}
          <Input
            type="text"
            label="Username"
            {...register('username')}
            errors={errors.username}
          />
          <Input
            type="email"
            label="Email"
            {...register('email')}
            errors={errors.email}
          />
          <section className="relative">
            <Input
              type={showpass ? 'text' : 'password'}
              label="Password"
              {...register('password')}
              errors={errors.password}
              onKeyUp={handleKeyUp}
            />
            <section
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute right-3 top-[1.1rem] text-xl text-gray-dark cursor-pointer"
            >
              {showpass ? <AiFillEyeInvisible /> : <AiFillEye />}
            </section>

            {errors?.password?.type === 'matches' && (
              <PasswordRequirement isValid={passChecks} />
            )}
          </section>

          <button className="bg-blue text-white w-full rounded-md h-12 mt-10 hover:scale-105 ease-in-out duration-300">
            {loading ? (
              <Image src={loadingIcon} alt="loading.." className="w-8 m-auto" />
            ) : (
              'Sign up'
            )}
          </button>
        </form>
      </section>
    </>
  );
};

export default Signup;
