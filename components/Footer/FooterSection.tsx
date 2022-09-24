import NavLinks from '../NavLinks/NavLinks';

interface Props {
  title: string;
  data: {
    text: string;
    link: string;
  }[];
}

const FooterSection = ({ title, data }: Props) => {
  const style = {
    container: 'flex-1',
    h5: 'font-bold pb-3 text-white',
    ul: 'flex flex-col gap-3 text-gray-dark',
    link: 'hover:text-white',
  };

  return (
    <section className={style.container}>
      <h5 className={style.h5}>{title}</h5>

      <ul className={style.ul}>
        {data.map((item) => (
          <NavLinks
            key={item.text}
            text={item.text}
            link={item.link}
            style={style.link}
          />
        ))}
      </ul>
    </section>
  );
};

export default FooterSection;
