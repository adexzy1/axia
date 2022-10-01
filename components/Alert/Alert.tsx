import { AiFillCloseCircle } from 'react-icons/ai';
import useAppSelector from '../../hooks/useAppSelector';

interface Props {
  error: string;
  type: string;
}

const Alert = () => {
  const { text, type } = useAppSelector((state) => state.alert);
  return (
    <div className="fixed z-50 bg-[#D5ECD9] text-black py-4 top-3 shadow rounded-md flex items-center px-5 gap-5 basis-2 sm:w-[25rem] w-[90%] translate-x-1/2 right-1/2 sm:right-5 sm:translate-x-0">
      <AiFillCloseCircle className="text-green-500 text-xl" />
      <p className="flex-1 text-sm text-green-500">{text}</p>
    </div>
  );
};

export default Alert;
