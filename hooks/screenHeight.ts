import { useState, useEffect } from "react";

export default function screenHeight() {
  const [screenHeight, setScreenHeight] = useState<number>(undefined);

  useEffect(() => {
    function handleResize() { setScreenHeight(window.innerHeight); }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenHeight;
}