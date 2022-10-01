import { useEffect, useRef } from 'react';

const useClickOutside = (callBack: () => void) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (!ref.current?.contains(e.target)) {
        callBack();
      }
    };

    document.addEventListener('click', clickOutside);

    return () => document.removeEventListener('click', clickOutside);
  }, [callBack]);

  return { ref };
};

export default useClickOutside;
