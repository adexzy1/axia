import { ReactNode } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

interface Props {
  children: ReactNode;
}

const IndexLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-y-20-[30rem]">
      <Navbar />
      <section className="mx-6 bg-red-300">{children}</section>
      <Footer />
    </div>
  );
};

export default IndexLayout;
