import { useEffect, useState } from 'react';
import Avatar from '../Avatar/Avatar';
import CartIcon from '../CartIcon/CartIcon';
import { CgMenuGridR } from 'react-icons/cg';
import Menu from '../Menu/Menu';
import Logo from '../logo/Logo';
import SearchBox from '../searchBox/SearchBox';
import useIsDesktop from '../../hooks/useIsDesktop';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // custom hook
  const isDesktop = useIsDesktop();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    switch (toggle) {
      case true:
        document.body.style.overflowY = 'hidden';
        break;
      default:
        document.body.style.overflowY = 'scroll';
    }
  }, [toggle]);

  const style = {
    container:
      'shadow-md z-20 2xl:w-[1440px] 2xl:m-auto bg-white top-0 fixed w-full left-0',
    wrapper:
      'py-5 px-5 xl:mx-24 2xl:mx-0 flex justify-between items-center flex-wrap gap-y-5 lg:flex-nowrap lg:gap-x-20',
    logo_menuIconContainer: 'flex items-center gap-5',
    menuIconWrapper: 'lg:hidden',
    menuIcon: 'text-2xl text-black',
    avatar_CartWrapper: 'flex items-center gap-5',
  };

  return (
    <header className={style.container}>
      <div className={style.wrapper}>
        <section className={style.logo_menuIconContainer}>
          <section onClick={handleToggle} className={style.menuIconWrapper}>
            <CgMenuGridR className={style.menuIcon} />
          </section>

          <Logo width={isDesktop ? 150 : 110} />
        </section>

        <SearchBox />

        <Menu toggle={toggle} setToogle={setToggle} />

        <section className={style.avatar_CartWrapper}>
          <Avatar setToggle={setToggle} />
          <CartIcon />
        </section>
      </div>
    </header>
  );
};

export default Navbar;
