import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import MobileSeacrhModal from './MobileSeacrhModal';

const MobileSearchBox = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div
        className="border border-gray-400 rounded-2xl flex gap-3 px-2 py-1 items-center lg:hidden"
        onClick={handleShowModal}
      >
        <IoSearch className="text-xl text-gray-400" />
        <p className="text text-gray-400">Search farm produce</p>
      </div>

      {showModal && <MobileSeacrhModal handleShowModal={handleShowModal} />}
    </>
  );
};

export default MobileSearchBox;
