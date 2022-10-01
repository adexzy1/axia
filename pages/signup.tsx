import Signup from '../components/Onboarding/Signup';
import RegistraionSuccess from '../components/Onboarding/RegistraionSuccess';
import EmailConfirmationSuccess from '../components/Onboarding/EmailConfirmationSuccess';
import useAppSelector from '../hooks/useAppSelector';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const SignUpFlow = () => {
  const { signupSuccess } = useAppSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const { query } = useRouter();

  useEffect(() => {
    if (signupSuccess) {
      setCurrentPage(2);
    } else if (query?.['email-confirmation'] === 'success') {
      setCurrentPage(3);
    }
  }, [signupSuccess, query]);

  return (
    <>
      {currentPage === 1 && <Signup />}
      {currentPage === 2 && <RegistraionSuccess />}
      {currentPage === 3 && <EmailConfirmationSuccess />}
    </>
  );
};

export default SignUpFlow;
