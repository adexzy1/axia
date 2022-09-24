import Image from 'next/future/image';
import logo from '../../public/img/axia2.svg';
import { useRouter } from 'next/router';

interface Props {
  margin?: string;
  width: number;
}
const Logo = ({ margin, width }: Props) => {
  const router = useRouter();
  return (
    <section>
      <Image
        onClick={() => router.push('/')}
        src={logo}
        alt="logo"
        width={width}
        className={`${margin} cursor-pointer`}
      />
    </section>
  );
};

export default Logo;
