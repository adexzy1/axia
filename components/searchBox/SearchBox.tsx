import DesktopSearchBox from './DesktopSearchBox';
import MobileSearchBox from './MobileSearchBox';

const SearchBox = () => {
  return (
    <div className="order-4 flex-1 basis-full lg:order-none">
      <MobileSearchBox />
      <DesktopSearchBox />
    </div>
  );
};

export default SearchBox;
