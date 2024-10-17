import { useState, useEffect } from "react";
import { breakpoints } from "../theme/variables";

const useIsMobileBreakpoint = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoints.small);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobileBreakpoint;
