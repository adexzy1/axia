import { forwardRef, KeyboardEvent, LegacyRef } from 'react';

interface Props {
  type: string;
  name: string;
  label: string;
  errors: any;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = forwardRef((props: Props, ref: LegacyRef<HTMLInputElement>) => {
  const { type, name, label, errors, onKeyUp, ...otherProps } = props;

  const styles = {
    container: 'relative mt-9  h-14',
    input: `w-full py-4 px-3 text-sm outline-none border-[1.5px] border-blue-light overflow-hidden rounded bg-transparent  focus:outline-none focus:border-blue peer ${
      errors && 'border-red-400 focus:border-red-400'
    }`,
    label: `absolute text-sm transform top-[-0.65rem] bg-white px-1 left-3 pointer-events-none peer-focus:text-blue  ${
      errors ? 'text-red-400 peer-focus:text-red-400' : 'text-blue-light'
    }`,
    error: 'text-red-400 text-sm pl-1 pt-1',
  };

  return (
    <section className={styles.container}>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder=" "
        autoComplete="off"
        {...otherProps}
        ref={ref}
        onKeyUp={onKeyUp}
      />

      <label className={styles.label}>{label}</label>
      <p className={styles.error}>{errors?.message}</p>
    </section>
  );
});

Input.displayName = 'Input';

export default Input;
