import { ReactNode } from 'react';
import Header from '../components/Onboarding/Header';

const Onboarding = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Onboarding;
