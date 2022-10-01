import Image from 'next/future/image';
import errorImage from '../public/img/404-image.svg';
import { IoArrowForward } from 'react-icons/io5';
import NavLinks from '../components/NavLinks/NavLinks';

const index = () => {
  const style = {
    link: 'bg-blue flex w-48 justify-center items-center p-3 text-white rounded mx-auto uppercase gap-3 shadow hover:gap-5 duration-300 hover:bg-blue-dark mt-10 flex-row-reverse',
  };
  return (
    <div>
      <Image src={errorImage} alt="error" width={550} className="mx-auto" />

      <NavLinks
        text=" Go Home"
        link="/"
        Icon={IoArrowForward}
        style={style.link}
      />
    </div>
  );
};

export default index;
