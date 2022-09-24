import NavLinks from '../NavLinks/NavLinks';

interface Props {
  category: string;
  data: {
    name: string;
    link: string;
  }[];
}

const MenuCategories = ({ category, data }: Props) => {
  const style = {
    container: 'mt-2 px-3 border-t',
    h5: 'text-xs font-bold py-3 uppercase text-blue',
    link: 'text-black hover:text-blue-dark text-sm py-2 cursor-pointer transition block',
  };
  return (
    <section className={style.container}>
      <h5 className={style.h5}>{category}</h5>
      {data.map((item) => (
        <NavLinks
          key={item.name}
          link={item.link}
          text={item.name}
          style={style.link}
        />
      ))}
    </section>
  );
};

export default MenuCategories;
