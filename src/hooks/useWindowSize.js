import { useEffect } from "react";
import { useState } from "react";

const useWindowSize = () => {
    
  const [Windowsize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handlesize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    handlesize();

    window.addEventListener("resize", handlesize);

    return () => window.removeEventListener("resize", handlesize);
  }, []);

  return Windowsize;
};

export default useWindowSize;
