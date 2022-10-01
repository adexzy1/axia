import Image from 'next/future/image';
import React from 'react';
import loadingIcon from '../../public/img/loading.svg';

interface Props {
  text: string;
  loading: boolean;
}

const Button = ({ text, loading }: Props) => {
  const style = {
    loginBtn:
      ' bg-blue text-white w-full rounded-md h-14 mt-10 hover:scale-105 ease-in-out duration-300',
    loadinIcon: 'w-8 m-auto',
  };

  return (
    <button className={style.loginBtn}>
      {loading ? (
        <Image
          src={loadingIcon}
          alt="loading..."
          className={style.loadinIcon}
        />
      ) : (
        `${text}`
      )}
    </button>
  );
};

export default Button;
