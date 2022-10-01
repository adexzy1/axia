import Head from 'next/head';
import useAppSelector from '../hooks/useAppSelector';
import IndexLayout from '../layout';

const Home = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);

  return (
    <>
      <Head>
        <title>Axia Nigeria | Online Shopping for Farm Produce</title>
      </Head>
      <div className="text-black">
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
        <div>Home Page</div>
      </div>
    </>
  );
};

Home.PageLayout = IndexLayout;

export default Home;
