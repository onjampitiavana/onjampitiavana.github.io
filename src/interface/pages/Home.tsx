import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import onja from "../../assets/onja.png"
import { FaDownload } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
function Home() {
    return (
        <div>
            <div className="md:flex items-center md:gap-50">
                <div id="home" className="mt-4">
                    <h1 className="text-left text-2xl text-[var(--bg)]">
                        <span className="font-bold">Hi !, I’m ONJAMPITIAVANA</span> <br />
                        <p className="font-semibold"> I Full-stack developer<br /> focused on backend and system design.</p>
                    </h1>

                </div>
                <div className="flex-row">
                    <img src={onja} alt="onja" className="w-70 h-70 md:h-100 md:w-100 object-cover" />
                    <div className="flex-row ml-20 mt-3 md:ml-30  ">
                        <div className="flex items-center gap-4 md:gap-8">
                            <a href="mailto:onjampitiavanasantatriniaina@gmail.com"> <FaEnvelope /></a>
                            <a href="https://github.com/onjampitiavana" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/onjampitiavana" target="_blank" rel="noopener noreferrer"><FaLinkedin /> </a>
                            <a href="https://wa.me/261325292401" target="_blank" rel="noopener norefer"><FaWhatsapp /> </a>
                        </div>
                        <div>
                            <button className="flex items-center gap-2 mt-1 md:gap-4 md:mt-2 cursor-pointer"><FaDownload />  Download CV  </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className="px-8 py-4 flex items-center gap-3  hover:translate-1 rounded shadow-md bg-gray-500 hover:scale-100 transition-all duration-100 cursor-pointer hover:bg-white">
                    <BiChevronDown size={40}/> <span>Learn about me</span> </button>
            </div>
        </div>
    );
}

export default Home;