import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

const CartIcon = () => {
  const cart = 1;

  return (
    <Link href="/cart" className="border-0">
      <section className="relative cursor-pointer">
        {cart > 0 && (
          <span className="absolute px-[6px] py-[1px] bg-blue -right-2 -top-1 rounded-full text-xs text-white">
            {cart}
          </span>
        )}

        <IoCartOutline className="text-2xl  hover:text-blue" />
      </section>
    </Link>
  );
};

export default CartIcon;
