import avatar from '../../public/img/avatarPlaceholder.jpeg';
import { Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import useIsDesktop from '../../hooks/useIsDesktop';
import Image from 'next/image';
import DesktopUserMenu from '../Menu/DesktopUserMenu';
import useClickOutside from '../../hooks/useClickOutside';

interface Props {
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const Avatar = ({ setToggle }: Props) => {
  const [showDesktopDropdown, setshowDesktopDropdown] = useState(false);

  // custom hooks
  const isDesktop = useIsDesktop();

  const { ref } = useClickOutside(() => {
    if (showDesktopDropdown) {
      setshowDesktopDropdown(false);
    }
  });

  const handleClick = () => {
    if (isDesktop) {
      setshowDesktopDropdown((prev) => !prev);
    } else {
      setToggle((prev) => !prev);
    }
  };

  return (
    <section className="relative z-[10]" onClick={handleClick} ref={ref}>
      {!isDesktop && (
        <section className=" w-7 h-7 rounded-full border-[1px] border-green overflow-hidden cursor-pointer">
          <Image src={avatar} alt="avatar" />
        </section>
      )}

      {isDesktop && (
        <section className="text-sm flex items-center cursor-pointer bg-gray py-2 px-4 rounded gap-1 hover:text-blue">
          <AiOutlineUser className="text-2xl" />
          <p>Account</p>
          {showDesktopDropdown ? (
            <MdKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown />
          )}
        </section>
      )}

      {showDesktopDropdown && <DesktopUserMenu />}
    </section>
  );
};

export default Avatar;
