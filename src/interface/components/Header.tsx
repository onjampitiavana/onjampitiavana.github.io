import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { MdClose, MdLanguage, MdMenu, MdWbSunny } from "react-icons/md";
import { FiActivity, FiHome, FiMoon } from "react-icons/fi";
import { BsFilePerson } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";

function Header() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  const [open, setOpen] = useState(false);
  const scrollTo =(id)=>{
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    setOpen(false)
  }
  return (
    <header className="w-full z-10 h-16 flex items-center justify-between px-6 bg-gray-50 shadow-md fixed">
      <img src={Logo} alt="logo" className="h-10 w-auto md:h-20 md:w-20 object-contain" />
      <div className="hidden space-x-5 items-center font-semibold md:flex">
        <button onClick={()=>scrollTo("home")} className="cursor-pointer hover:-translate-y-1 hover:scale-100 transition-all duration-100">Home</button>
        <button onClick={()=>scrollTo("about")} className="cursor-pointer hover:-translate-1 hover:scale-100 transition-all duration-100 ">About</button>
        <button onClick={()=>scrollTo("career")} className="cursor-pointer hover:-translate-1 hover:scale-100 transition-all duration-100 ">Career</button>
        <button onClick={()=>scrollTo("project")} className="cursor-pointer hover:-translate-1 hover:scale-100 transition-all duration-100">Projects</button>
        <button className="cursor-pointer"> <MdLanguage /> </button>
        <button onClick={() => setDark(prev => !prev)}
          className="  dark:bg-gray-700 text-black dark:text-white transition cursor-pointer">
          {dark ? <FiMoon /> : <MdWbSunny color="gold" />}
        </button>
      </div>
      <div className="flex items-center gap-4 md:hidden">
                <button className="cursor-pointer"> <MdLanguage /> </button>
        <button onClick={() => setDark(prev => !prev)}
          className="  dark:bg-gray-700 text-black dark:text-white transition cursor-pointer">
          {dark ? <FiMoon /> : <MdWbSunny color="gold" />}
        </button>
        <button onClick={()=>setOpen(!open)}>{open ? <MdClose size={28}/> : <MdMenu size={28}/>}</button>
      </div>
      {open &&(<div className="absolute top-16 left-0 w-75 bg-gray-100 shadow-md flex flex-col gap-5 h-screen md:hidden">
        <button onClick={()=>scrollTo("home")} className="text-left ml-8 mt-8 flex items-center gap-1"> <FiHome size={15}/> <span>Home</span> </button>
        <button onClick={()=>scrollTo("about")} className="text-left ml-8 gap-1 flex items-center"><BsFilePerson size={15}/> <span>About</span> </button>
        <button onClick={()=>scrollTo("career")} className="text-left ml-8 flex items-center gap-1 "><FiActivity size={15}/>  <span>Career</span> </button>
        <button onClick={()=>scrollTo("project")} className="text-left ml-8 flex items-center gap-1"> <AiFillProject size={15}/> <span>Projects</span> </button>

      </div>)}
    </header>
  );
}
export default Header;