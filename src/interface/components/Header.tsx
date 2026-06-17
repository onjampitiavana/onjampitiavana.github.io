import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { MdLanguage, MdWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Header() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  const navigate = useNavigate()
  return (
    <header className="w-full h-16 flex items-center justify-between px-6 bg-[var(--bg)] shadow-xl overflow-hidden fixed">
      <img src={Logo} alt="logo" className="h-15 w-auto md:h-20 md:w-20 object-contain" />
      <div className="space-x-5 items-center font-semibold md:space-x-10">
        <button onClick={()=> document.getElementById("about")?.scrollIntoView({behavior:"smooth"})}
         className="cursor-pointer hover:-translate-y-1 hover:scale-100 transition-all duration-100">Home</button>
        <button className="cursor-pointer hover:-translate-1 hover:scale-100 transition-all duration-100 ">About</button>
        <button className="cursor-pointer hover:-translate-1 hover:scale-100 transition-all duration-100 ">Career</button>
        <button className="cursor-pointer hover:-translate-1 hover:scale-100 transition-all duration-100">Projects</button>
        <button className="cursor-pointer"> <MdLanguage /> </button>
        <button onClick={() => setDark(prev => !prev)}
          className="  dark:bg-gray-700 text-black dark:text-white transition cursor-pointer">
          {dark ? <FiMoon /> : <MdWbSunny color="gold" />}
        </button>
      </div>
    </header>
  );
}

export default Header;