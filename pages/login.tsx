import Input from '../components/Input/Input';
import LoginWithGoogle from '../components/Onboarding/LoginWithGoogle';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import loadingIcon from '../public/img/loading.svg';
import useAppDispatch from '../hooks/useAppDispatch';
import { removeErrorMessage } from '../Redux/slice/userSlice';
import useAppSelector from '../hooks/useAppSelector';
import Logo from '../components/logo/Logo';
import useFormValidation from '../hooks/useFormValidation';
import loginSchema from '../schema/loginSchema';
import Link from 'next/link';
import Image from 'next/future/image';

const Login = () => {
  const [showpass, setShowPass] = useState(false);

  // custom form validation hook
  const { register, handleSubmit, errors } = useFormValidation(loginSchema);

  // custom hook
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);

  // form submit handler
  const handleLogin: SubmitHandler<FieldValues> = (data) => {};

  const handleBlur = () => {
    // remove error message
    if (error) {
      dispatch(removeErrorMessage());
      console.log('fired');
    }
  };

  return (
    <section className="py-7 m-auto rounded-md sm:w-[40rem] sm:px-10 sm:mt-16 sm:shadow min-h-full">
      <Logo margin="m-auto" width={140} />
      <section className="text-gray-dark text-center p-5">
        Don&apos;t have an Account?{' '}
        <Link href={'/signup'}>
          <a className="text-blue"> Signup</a>
        </Link>
      </section>

      <LoginWithGoogle />

      <section className="border-b border-gray-dark relative mt-10 mx-5">
        <p className="absolute top-[-0.95rem] right-[50%] transform translate-x-[50%] text-sm bg-white p-1 rounded-full border border-gray-dark text-gray-dark">
          OR
        </p>
      </section>

      <form className="mx-5" onSubmit={handleSubmit(handleLogin)}>
        {error && (
          <section className="mt-5 p-3 text-center rounded text-red-400 bg-red-100">
            {error}
          </section>
        )}

        <Input
          type="email"
          label="Email"
          {...register('email', {
            onBlur: () => handleBlur(),
          })}
          errors={errors.email}
        />

        <section className="relative">
          <Input
            type={showpass ? 'text' : 'password'}
            label="Password"
            {...register('password', {
              onBlur: () => handleBlur(),
            })}
            errors={errors.password}
          />

          <section
            onClick={() => setShowPass((prev) => !prev)}
            className="absolute right-3 top-[50%] translate-y-[-50%] text-xl text-gray-dark cursor-pointer"
          >
            {showpass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </section>
        </section>

        <button
          className=" bg-blue text-white w-full rounded-md h-14 mt-10 hover:scale-105 ease-in-out duration-300"
          id="sign-in-button relative"
        >
          {loading ? (
            <Image src={loadingIcon} alt="loading.." className="w-8 m-auto" />
          ) : (
            'Login'
          )}
        </button>

        <section className="flex justify-between text-sm items-center mt-7">
          <div className="text-grayText flex items-center  gap-1">
            <input
              type="checkbox"
              id="rememberMe"
              className="cursor-pointer"
              {...register('keepMeLoggedIn')}
            />
            <label htmlFor="rememberMe" className="cursor-pointer">
              Remember me
            </label>
          </div>

          <button className="text-gray-dark">Forgotten Password?</button>
        </section>
      </form>
    </section>
  );
};

export default Login;
