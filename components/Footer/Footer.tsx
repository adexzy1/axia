import visa from '../../public/img/visa.svg';
import paypal from '../../public/img/paypal.svg';
import mastercard from '../../public/img/mastercard.svg';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoTwitter } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';
import Image from 'next/future/image';
import Link from 'next/link';
import FooterSection from './FooterSection';

const Footer = () => {
  // get the current year
  const date = new Date().getFullYear();

  const style = {
    container: 'bg-black text-gray-dark   mt-auto w-full',
    wrapper:
      'top-col grid gap-y-10 xl:grid-cols-[25%,12%,12%,12%,20%] xl:gap-x-[5%] py-16  px-5  border-b 2xl:w-[1440px] 2xl:m-auto xl:mx-24 ',
    firstCol: 'flex flex-col justify-center',
    h5: 'font-bold pb-3 text-white',
    subFooter: 'pt-5 pb-10 text-center',
    subFooter_p: 'text-sm',
    socialsContainer: 'flex socials pt-5 gap-3 ',
    socials:
      'bg-white text-black rounded-full text-xl p-2 hover:bg-blue hover:text-white transition-all duration-300',
  };

  const compaySection = [
    { text: 'About Us', link: '/' },
    { text: 'Farners', link: '/' },
    { text: 'Products', link: '/' },
  ];
  const contactUs = [
    { text: 'Phone', link: '/' },
    { text: 'Email', link: '/' },
    { text: 'Whatapp', link: '/' },
  ];

  const Support = [
    { text: 'FAQ', link: '/' },
    { text: 'Live Chat', link: '/' },
  ];

  return (
    <footer className={style.container}>
      <section className={style.wrapper}>
        <section className={style.firstCol}>
          <p>
            We are a brand that will help you find the perfect market you’ve
            been looking for.
          </p>

          <section className="pt-5 flex">
            <div className="mr-5">
              <Image src={paypal} alt="paypal" />
            </div>

            <div className="mr-5">
              <Image src={visa} alt="visa" className="mr-5" />
            </div>

            <div className="mr-5">
              <Image src={mastercard} alt="mastercard" className="mr-5" />
            </div>
          </section>
        </section>

        <>
          <FooterSection title="Company" data={compaySection} />
          <FooterSection title="Contact Us" data={contactUs} />
          <FooterSection title="Support" data={Support} />
        </>

        <section>
          <h5 className={style.h5}>Office Address</h5>

          <section>
            <p> Plot 253, Admiralty way, Lekki Lagos.</p>

            <section className={style.socialsContainer}>
              <Link href="/">
                <a className={style.socials}>
                  <IoLogoFacebook />
                </a>
              </Link>

              <Link href="/">
                <a className={style.socials}>
                  <IoLogoInstagram />
                </a>
              </Link>

              <Link href="/">
                <a className={style.socials}>
                  <IoLogoTwitter />
                </a>
              </Link>

              <Link href="/">
                <a className={style.socials}>
                  <IoLogoYoutube />
                </a>
              </Link>
            </section>
          </section>
        </section>
      </section>

      <section className={style.subFooter}>
        <p className={style.subFooter_p}>
          <span>{date}</span> Axia Inc. All Rights Reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
