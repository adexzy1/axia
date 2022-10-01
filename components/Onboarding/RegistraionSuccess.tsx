import Image from 'next/future/image';
import Head from 'next/head';
import checkIcon from '../../public/img/success.png';
import Header from './Header';

const RegistraionSuccess = () => {
  const style = {
    successWrapper:
      'text-center px-5 py-20 m-auto  rounded-md sm:w-[40rem] sm:p-20 sm:mt-20 sm:shadow min-h-full',
    iconWrapper: 'w-16 m-auto',
    icon: 'w-full',
    title: 'font-bold text-2xl py-3',
    message: 'text-gray-dark text-sm',
  };

  return (
    <>
      <Head>
        <title>Registration successful</title>
      </Head>

      <Header />

      <section className={style.successWrapper}>
        <div className={style.iconWrapper}>
          <Image src={checkIcon} alt="check icon" className={style.icon} />
        </div>

        <h5 className={style.title}>Registration Successful</h5>
        <p className={style.message}>
          You have successfully create an account with Axia. Kindly check your
          email to confirm your account
        </p>
      </section>
    </>
  );
};

export default RegistraionSuccess;
