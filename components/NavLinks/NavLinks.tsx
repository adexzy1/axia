import Link from 'next/link';
import type { IconType } from 'react-icons';

interface Props {
  link: string;
  text: string;
  style: string;
  Icon?: IconType;
  iconStyle?: string;
}

const NavLinks = ({ link, text, style, Icon, iconStyle }: Props) => {
  return (
    <Link href={link}>
      <a className={style}>
        {Icon && <Icon className={iconStyle} />}
        {text}
      </a>
    </Link>
  );
};

export default NavLinks;
