import { useState, useEffect } from "react";

export default function screenWidth() {
  const [screenWidth, setScreenWidth] = useState<number>(undefined);

  useEffect(() => {
    function handleResize() { setScreenWidth(window.innerWidth); }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
}