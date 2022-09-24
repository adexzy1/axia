import { BiCheck } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';

interface Props {
  isValid: any;
}

const PasswordRequirement = ({ isValid }: Props) => {
  const styles = {
    valid: 'text-green-400',
    li: ' flex items-center gap-x-1',
  };

  return (
    <section className="text-sm text-red-400 pl-1 pt-7">
      <ul>
        <li className={`${isValid.lenghtCheck && styles.valid} ${styles.li}`}>
          <section>{isValid?.lenghtCheck ? <BiCheck /> : <MdCancel />}</section>
          At least 6 characters
        </li>
        <li
          className={`${isValid.UpperCaseCheck && styles.valid} ${styles.li}`}
        >
          <section>
            {isValid?.UpperCaseCheck ? <BiCheck /> : <MdCancel />}
          </section>
          One uppercase
        </li>
        <li className={`${isValid.lowerCaseCheck && styles.valid}${styles.li}`}>
          <section>
            {isValid?.lowerCaseCheck ? <BiCheck /> : <MdCancel />}
          </section>
          One lowercase
        </li>
        <li className={`${isValid.numberCheck && styles.valid} ${styles.li}`}>
          <section>{isValid?.numberCheck ? <BiCheck /> : <MdCancel />}</section>
          One number
        </li>
      </ul>
    </section>
  );
};

export default PasswordRequirement;
