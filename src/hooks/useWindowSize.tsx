import { useEffect, useState } from "react";

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean | undefined;
};

const useWindowSize = (mobileWidthIndicator = 640) => {
  const [size, setSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
    isMobile: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= mobileWidthIndicator,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { size };
};

export default useWindowSize;
