import checkIcon from '../../public/img/success.png';
import { IoArrowForward } from 'react-icons/io5';
import Header from './Header';
import Image from 'next/future/image';
import NavLinks from '../NavLinks/NavLinks';
import Head from 'next/head';

const EmailConfirmationSuccess = () => {
  const style = {
    successWrapper:
      'text-center px-5 py-20 m-auto  rounded-md sm:w-[40rem] sm:p-20 sm:mt-20 sm:shadow min-h-full',
    iconWrapper: 'w-16 m-auto',
    icon: 'w-full',
    title: 'font-bold text-2xl py-3',
    message: 'text-gray-dark text-sm',
    btn: 'flex w-[50%] items-center gap-3 bg-blue text-white py-3 text-center justify-center m-auto mt-10 rounded-md hover:gap-5 duration-300 uppercase flex-row-reverse',
  };

  return (
    <>
      <Head>
        <title>Account verified</title>
      </Head>

      <Header />
      <section className={style.successWrapper}>
        <div className={style.iconWrapper}>
          <Image src={checkIcon} alt="check icon" className={style.icon} />
        </div>

        <h5 className={style.title}>Email Confirmed</h5>
        <p className={style.message}>
          You Account has been verified successfully. kindly Login to your
          account
        </p>

        <NavLinks
          link="/login"
          text="Login"
          style={style.btn}
          Icon={IoArrowForward}
        />
      </section>
    </>
  );
};

export default EmailConfirmationSuccess;
