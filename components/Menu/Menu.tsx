import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import { IoCloseSharp } from 'react-icons/io5';
import Logo from '../logo/Logo';
import MenuCategories from '../MenuCategories/MenuCategories';
import Link from 'next/link';

interface Props {
  toggle: boolean;
  setToogle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ toggle, setToogle }: Props) => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    setToogle((prev) => !prev);
  };

  const accountMenu = [
    { name: 'Profile', link: '/' },
    { name: 'Settings', link: '/' },
    { name: 'Orders', link: '/' },
    { name: 'Sell on Axia', link: '/' },
  ];

  const categories = [
    { name: 'Tubers', link: '/' },
    { name: 'Vegetables', link: '/' },
    { name: 'Fruits', link: '/' },
  ];

  const authLinks = [
    { name: 'Login', link: '/login' },
    { name: 'Create Account', link: '/signup' },
  ];

  return (
    <section
      className={`${
        toggle ? 'translate-x-0' : 'translate-x-[-100%]'
      } fixed top-0 bg-rgba h-[100vh] left-0 transform transition-all duration-300 overflow-y-scroll z-50 w-screen `}
    >
      <div className="bg-white flex flex-col h-full w-[90%]">
        <section className="flex items-center gap-5 py-5 px-3">
          <IoCloseSharp
            className="text-2xl  font-bold"
            onClick={() => setToogle(false)}
          />
          <Logo width={90} />
        </section>

        <section>
          {!user && (
            <section className="flex justify-between gap-5 text-sm text-center border-t border-gray-light py-5 px-3">
              {authLinks.map((item) => (
                <Link key={item.name} href={item.link}>
                  <a
                    className={`text-white py-3 px-2 border w-1/2 transition-all duration-150 rounded ${
                      item.name === 'Create Account'
                        ? 'border border-blue text-black hover:text-blue'
                        : ' bg-blue hover:bg-blue-dark '
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </section>
          )}

          {!user && <MenuCategories category="My Account" data={accountMenu} />}

          <MenuCategories category="Categories" data={categories} />
        </section>

        {user && (
          <button
            onClick={handleLogout}
            className="bg-blue hover:bg-blue-dark py-2 text-white rounded-md mx-3 mt-auto mb-5"
          >
            Log Out
          </button>
        )}
      </div>
    </section>
  );
};

export default Menu;
