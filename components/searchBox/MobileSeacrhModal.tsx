import { useEffect, useRef } from 'react';
import { IoArrowBack, IoSearch } from 'react-icons/io5';

interface Props {
  handleShowModal: () => void;
}

const MobileSeacrhModal = ({ handleShowModal }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  //set focus onMount
  useEffect(() => {
    inputRef.current!.focus();
  }, [inputRef]);

  const style = {
    container: 'fixed bg-white top-0 w-full left-0 z-20 h-screen',
  };

  return (
    <div className={style.container}>
      <section className="flex items-center px-3 py-3 shadow-sm gap-3">
        <IoArrowBack className="text-xl" onClick={handleShowModal} />
        <input
          ref={inputRef}
          type="text"
          name="search"
          placeholder="Search farm produce"
          className="flex-1 px-1 py-2 text-sm outline-none"
        />
        <>
          <span className="text-gray">|</span>
          <IoSearch className="text-xl" />
        </>
      </section>
    </div>
  );
};

export default MobileSeacrhModal;
