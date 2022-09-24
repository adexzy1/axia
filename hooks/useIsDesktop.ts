import { useEffect, useState } from 'react';

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const width = window.innerWidth >= 1024;
    if (width) {
      setIsDesktop(true);
    }
  }, []);

  return isDesktop;
};

export default useIsDesktop;
