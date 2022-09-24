import NavLinks from '../NavLinks/NavLinks';
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { GoPackage } from 'react-icons/go';
import { IoMailOutline } from 'react-icons/io5';
import useAppSelector from '../../hooks/useAppSelector';

const DesktopMenu = () => {
  const { user } = useAppSelector((state) => state.user);
  const handleLogOut = async () => {};

  const style = {
    link: 'flex items-center gap-3 border-none block py-2 px-5 hover:bg-gray hover:text-black transition hover:font-semibold',
    loginBtn:
      'px-2 bg-blue text-white w-[80%] block mx-auto py-2 rounded uppercase shadow my-4 hover:bg-blue-dark text-center',
  };

  const loggedOutMenu = [
    { name: 'My Account', link: '/', icon: AiOutlineUser },
    { name: 'Orders', link: '/', icon: GoPackage },
    { name: 'Saved Items', link: '/', icon: AiOutlineHeart },
    { name: 'Inbox', link: '/', icon: IoMailOutline },
  ];

  return (
    <section className="absolute bg-white shadow text-black  rounded-md z-50 top-10 w-60 left-1/2 -translate-x-1/2 text-sm">
      {!user && (
        <NavLinks text="Login" link={'/login'} style={style.loginBtn} />
      )}

      <div className={user ? 'border-b' : 'border-t'}>
        {loggedOutMenu.map((item, i) => (
          <NavLinks
            key={i}
            link={item.link}
            text={item.name}
            style={style.link}
            Icon={item.icon}
          />
        ))}
      </div>

      {user && (
        <button
          className="px-2 text-blue w-[80%] block mx-auto py-2 rounded uppercase  my-2 hover:bg-blue-light"
          onClick={handleLogOut}
        >
          Logout
        </button>
      )}
    </section>
  );
};

export default DesktopMenu;
