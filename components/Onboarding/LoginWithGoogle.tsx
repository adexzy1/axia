import Image from 'next/future/image';
import Logo from '../../public/img/googleLogo.png';

interface Props {
  signup?: boolean;
}

const LoginWithGoogle = ({ signup }: Props) => {
  const handleGoogleLogin = async () => {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + '/api/connect/google';
    window.location.replace(url);
  };

  return (
    <section
      onClick={handleGoogleLogin}
      className="flex justify-center items-center rounded-md border-[1.5px] border-blue-light text-blue-light py-3 m-3 cursor-pointer hover:scale-105 ease-in-out duration-300"
    >
      <p className="pr-3 text-sm">{`${signup ? 'Sign Up' : 'Login'} with`}</p>
      <section className="w-14">
        <Image src={Logo} alt="google logo" />
      </section>
    </section>
  );
};

export default LoginWithGoogle;
