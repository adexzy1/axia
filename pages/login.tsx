import Input from '../components/Input/Input';
import LoginWithGoogle from '../components/Onboarding/LoginWithGoogle';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import loadingIcon from '../public/img/loading.svg';
import { removeErrorMessage } from '../Redux/user/userSlice';
import useAppSelector from '../hooks/useAppSelector';
import Logo from '../components/logo/Logo';
import useFormValidation from '../hooks/useFormValidation';
import loginSchema from '../schema/loginSchema';
import Link from 'next/link';
import Image from 'next/future/image';
import useAppDispatch from '../hooks/useAppDispatch';
import userLogin from '../Redux/user/asyncThunk/userLogin';
import Head from 'next/head';
import NavLinks from '../components/NavLinks/NavLinks';

const Login = () => {
  const [showpass, setShowPass] = useState(false);

  // custom hook
  const { register, handleSubmit, errors } = useFormValidation(loginSchema);
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);

  const handleLogin: SubmitHandler<FieldValues> = (data) => {
    dispatch(userLogin(data));
  };

  const handleBlur = () => {
    if (error) {
      dispatch(removeErrorMessage());
    }
  };

  const style = {
    container:
      'py-7 m-auto rounded-md sm:w-[40rem] sm:px-10 sm:mt-16 sm:shadow',
    linkContainer: 'text-gray-dark text-center p-5',
    logo: 'm-auto',
    dividerWrapper: 'border-b border-gray-dark relative mt-10 mx-5',
    divider:
      'absolute top-[-0.95rem] right-[50%] transform translate-x-[50%] text-sm bg-white p-1 rounded-full border border-gray-dark text-gray-dark',
    form: 'mx-5',
    error: 'mt-5 p-3 text-center rounded text-red-400 bg-red-100',
    signupLink: 'text-blue',
    PassWrapper: 'relative',
    showPass:
      'absolute right-3 top-[50%] translate-y-[-50%] text-xl text-gray-dark cursor-pointer',
    loginBtn:
      ' bg-blue text-white w-full rounded-md h-14 mt-10 hover:scale-105 ease-in-out duration-300',
    loadinIcon: 'w-8 m-auto',
    bottomWrapper: 'flex justify-between text-sm items-center mt-7',
    rememberMeWrapper: 'text-grayText flex items-center  gap-1',
    rememberMe: 'cursor-pointer',
    forgotPass: 'text-gray-dark',
  };

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <section className={style.container}>
        <Logo margin={style.logo} width={140} />

        <section className={style.linkContainer}>
          Don&apos;t have an Account?{' '}
          <Link href={'/signup'}>
            <a className={style.signupLink}> Signup</a>
          </Link>
        </section>

        <LoginWithGoogle />

        <section className={style.dividerWrapper}>
          <p className={style.divider}>OR</p>
        </section>

        <form className={style.form} onSubmit={handleSubmit(handleLogin)}>
          {error && <section className={style.error}>{error}</section>}

          <Input
            type="email"
            label="Email"
            {...register('email', {
              onBlur: () => handleBlur(),
            })}
            errors={errors.email}
          />

          <section className={style.PassWrapper}>
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
              className={style.showPass}
            >
              {showpass ? <AiFillEyeInvisible /> : <AiFillEye />}
            </section>
          </section>

          <button className={style.loginBtn}>
            {loading ? (
              <Image
                src={loadingIcon}
                alt="loading..."
                className={style.loadinIcon}
              />
            ) : (
              'Login'
            )}
          </button>

          <section className={style.bottomWrapper}>
            <div className={style.rememberMeWrapper}>
              <input
                type="checkbox"
                id="rememberMe"
                className={style.rememberMe}
                {...register('keepMeLoggedIn')}
              />
              <label htmlFor="rememberMe" className={style.rememberMe}>
                Remember me
              </label>
            </div>

            <NavLinks
              text="Forgotten Password?"
              style={style.forgotPass}
              link="/forgot-password"
            />
          </section>
        </form>
      </section>
    </>
  );
};

export default Login;
