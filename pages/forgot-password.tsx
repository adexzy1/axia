import { useLayoutEffect, useState } from 'react';
import CheckMail from '../components/ForgotPassword/CheckMail';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import { useRouter } from 'next/router';
import ResetPassword from './reset-password';

const ForgottenPassword = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { query } = useRouter();

  const value = query.code as string;

  useLayoutEffect(() => {
    if (value) {
      setCurrentPage(3);
    }
  }, [value]);

  return (
    <>
      {currentPage === 1 && (
        <ForgotPassword
          setEmail={setEmail}
          setCurrentPage={setCurrentPage}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      )}
      {currentPage === 2 && <CheckMail email={email} />}
    </>
  );
};

export default ForgottenPassword;
