import { useState, useEffect, FormEvent } from 'react';
import { IoSearch, IoClose } from 'react-icons/io5';
import { useRouter } from 'next/router';

const DesktopSearchBox = () => {
  const [showResetBtn, setShowResetBtn] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const { query } = useRouter();

  console.log();

  useEffect(() => {
    if (query.query) {
      setInputValue(query.query as string);
    }
  }, [query]);

  // show & remove clear BTN
  useEffect(() => {
    if (inputValue !== '') {
      setShowResetBtn(true);
    } else {
      setShowResetBtn(false);
    }
  }, [inputValue]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (inputValue === '') {
      // window.location.href = `/catalog?query=${inputValue}`;
      e.preventDefault();
    }
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden lg:flex gap-5 text-gray-400"
      action="/catalog"
      method="GET"
    >
      <div className="border border-gray-400 flex-1 items-center flex gap-2 px-2 h-10 rounded">
        <IoSearch className="text-2xl" />
        <input
          onChange={(e) => setInputValue(e.target.value)}
          autoComplete={'off'}
          value={inputValue}
          name="query"
          type="text"
          className="w-full outline-none text-black"
          placeholder="Search farm produce"
        />

        {showResetBtn && (
          <IoClose
            className="cursor-pointer text-gray-400 text-2xl"
            onClick={handleClearInput}
          />
        )}
      </div>

      <button className="uppercase text-sm bg-blue text-white px-5 rounded hover:bg-blue-dark shadow">
        Search
      </button>
    </form>
  );
};

export default DesktopSearchBox;
