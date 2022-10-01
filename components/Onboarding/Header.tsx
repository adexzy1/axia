import React from 'react';
import useIsDesktop from '../../hooks/useIsDesktop';
import Logo from '../logo/Logo';

const Header = () => {
  const isDesktop = useIsDesktop();
  const style = {
    header: 'flex items-center justify-between p-5 sm:px-20 shadow-sm',
    contactUs: 'font-light text-sm',
    mail: 'text-blue font-thin',
  };

  return (
    <section className={style.header}>
      <Logo width={isDesktop ? 120 : 110} />
      <p className={style.contactUs}>
        Contact us: <span className={style.mail}>admin@onepurse.com</span>
      </p>
    </section>
  );
};

export default Header;
