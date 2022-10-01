import Image from 'next/future/image';
import Head from 'next/head';
import mailIcon from '../../public/img/email.png';
import Header from '../Onboarding/Header';

interface Props {
  email: string;
}

const CheckMail = ({ email }: Props) => {
  const style = {
    Wrapper:
      'text-center px-5 py-20 m-auto  rounded-md sm:w-[40rem] sm:p-20  sm:mt-20 sm:shadow min-h-full',
    iconWrapper: 'w-28 m-auto',
    icon: 'w-full',
    title: 'font-bold text-2xl py-3',
    message: 'text-gray-dark text-sm',
    email: 'text-blue',
  };

  return (
    <>
      <Head>
        <title>Forgotten Password</title>
      </Head>

      <Header />

      <section className={style.Wrapper}>
        <div className={style.iconWrapper}>
          <Image src={mailIcon} alt="email icon" className={style.icon} />
        </div>

        <h5 className={style.title}>Check your email</h5>

        <p className={style.message}>
          We sent an email to <span className={style.email}>{email}.</span> If
          you don&apos;t get the email soon, check your spam
        </p>
      </section>
    </>
  );
};

export default CheckMail;
