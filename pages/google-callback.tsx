import { useEffect } from 'react';
import useAppDispatch from '../hooks/useAppDispatch';
import Header from '../components/Onboarding/Header';
import googleLogin from '../Redux/user/asyncThunk/googleLogin';
import { useRouter } from 'next/router';

const GoogleCallback = () => {
  const dispatch = useAppDispatch();
  const { query } = useRouter();

  //   const value = searchParams.get('access_token');
  const value = query?.['access_token'] as string;

  useEffect(() => {
    if (value) {
      dispatch(googleLogin(value));
    }
  }, [value, dispatch]);

  const style = {
    Wrapper:
      'text-center px-5 py-20 m-auto  rounded-md sm:w-[40rem] sm:p-20 sm:mt-20 sm:shadow min-h-full',
    spinner: 'w-16 m-auto',
    title: 'font-bold text-2xl py-3',
    message: 'text-gray text-sm',
  };
  return (
    <>
      <Header />
      <section className={style.Wrapper}>
        <div className="border-8 border-gray border-t-blue w-20 h-20 mx-auto mb-5 rounded-full animate-spin 0."></div>

        <h5 className={style.title}>Logging in with Google</h5>
      </section>
    </>
  );
};

export default GoogleCallback;
