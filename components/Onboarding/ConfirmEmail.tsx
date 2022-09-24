import Image from 'next/future/image';
import emailIcon from '../../assets/img/email.png';

const ConfirmEmail = () => {
  return (
    <div>
      <div>
        <Image src={emailIcon} alt="email verification" />
        <h2>Check your email</h2>
        <p>
          We sent an email to jubrillawal05@gmail.com. If you don’t get the
          email soon, check your spam
        </p>
      </div>
    </div>
  );
};

export default ConfirmEmail;
