import NavLinks from '../NavLinks/NavLinks';
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { GoPackage } from 'react-icons/go';
import { IoMailOutline } from 'react-icons/io5';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import userLogout from '../../Redux/slice/asyncThunk/userLogout';

const DesktopUserMenu = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    dispatch(userLogout());
  };

  const style = {
    link: 'flex items-center gap-3 border-none block py-2 px-5 hover:bg-gray hover:text-black transition hover:font-semibold',
    loginBtn:
      'px-2 bg-blue text-white w-[80%] block mx-auto py-2 rounded uppercase shadow my-4 hover:bg-blue-dark text-center',
    linkIcon: 'text-2xl',
  };

  const menuItems = [
    { name: 'My Account', link: '/dashboard/account', icon: AiOutlineUser },
    { name: 'Orders', link: '/dashboard/orders', icon: GoPackage },
    {
      name: 'Saved Items',
      link: '/dashboard/saved-items',
      icon: AiOutlineHeart,
    },
    { name: 'Inbox', link: '/dashboard/inbox', icon: IoMailOutline },
  ];

  return (
    <section className="absolute bg-white shadow text-black  rounded-md z-50 top-10 w-60 left-1/2 -translate-x-1/2 text-sm">
      {!user && (
        <NavLinks text="Login" link={'/login'} style={style.loginBtn} />
      )}

      <div className={user ? 'border-b' : 'border-t'}>
        {menuItems.map((item, i) => (
          <NavLinks
            key={i}
            link={item.link}
            text={item.name}
            style={style.link}
            Icon={item.icon}
            iconStyle={style.linkIcon}
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

export default DesktopUserMenu;
