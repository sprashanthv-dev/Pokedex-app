import { useEffect, useState } from "react";

// Reference: https://stackoverflow.com/questions/44480053/how-to-detect-if-screen-size-has-changed-to-mobile-in-react
export const useResizer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getCurrentScreenWidth = () => window.innerWidth;

  const resize = () => setScreenWidth(getCurrentScreenWidth());

  useEffect(() => {
    setScreenWidth(getCurrentScreenWidth());

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
    //eslint-disable-next-line
  }, []);

  return screenWidth;
};
