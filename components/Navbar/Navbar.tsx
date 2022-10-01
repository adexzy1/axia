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
  const [showIcon, setShowIcon] = useState(false);

  // get current page path
  const currentPage = typeof window !== 'undefined' && window.location.pathname;

  useEffect(() => {
    if (currentPage !== '/') {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [currentPage]);

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
    container: 'shadow-md z-20 w-full bg-white top-0 fixed  left-0',
    wrapper:
      'py-5 px-5 xl:mx-24 flex justify-between items-center flex-wrap gap-y-5 lg:flex-nowrap lg:gap-x-20 2xl:w-[1440px] 2xl:mx-auto',
    logo_menuIconContainer: 'flex items-center gap-2',
    menuIcon: 'text-2xl text-black lg:hidden',
    menuIconDesktop: `text-2xl text-black hidden  cursor-pointer  ${
      showIcon ? 'lg:block' : 'lg:hidden'
    }`,
    avatar_CartWrapper: 'flex items-center gap-5',
  };

  return (
    <header className={style.container}>
      <div className={style.wrapper}>
        <section className={style.logo_menuIconContainer}>
          <section>
            <CgMenuGridR className={style.menuIcon} onClick={handleToggle} />
            <CgMenuGridR className={style.menuIconDesktop} />
          </section>

          <Logo width={isDesktop ? 200 : 110} />
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
