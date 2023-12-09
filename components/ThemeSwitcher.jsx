import { useState, useEffect, useRef } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  let localTheme = useRef(new Date().getHours() > 18 ? "dark" : "light");

  useEffect(() => {
    localTheme.current = localStorage.getItem("theme")?.length
      ? localStorage.getItem("theme")
      : "dark";
  }, []);

  const [theme, setTheme] = useState(localTheme.current);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed left-2 top-2" onClick={handleClick}>
      {theme === "dark" ? (
        <MdDarkMode className="h-10 w-10 fill-white" />
      ) : (
        <MdOutlineLightMode className="h-10 w-10 stroke-black" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
