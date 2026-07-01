import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import onja from "../../assets/onja.png"
import { FaDownload } from "react-icons/fa6";
function Home() {

    return (
        <div className="flex flex-col md:flex-row items-center md:gap-50">
                <div id="home" className="mt-4 md:mt-0 order-2 md:order-1">
                <h1 className="text-left md:text-2xl text-[var(--bg)]"><span className="md:text-2xl font-semibold">Hi, I’m</span><span className="font-bold text-xl md:text-2xl">  ONJAMPITIAVANA </span><br />
                    <p className="font-semibold md:text-2xl text-left">Full-stack developer<br />focused on backend and system design.</p></h1>
            </div>
            <div className="ml-4 order-1 md:order-2 ">
                <img src={onja} alt="onja" className="w-70 h-70 md:h-100 md:w-100 object-cover" />
                <div className=" ml-20 mt-3 md:ml-30">
                    <div className="flex items-center gap-4 md:gap-8">
                        <a href="mailto:onjampitiavanasantatriniaina@gmail.com"><FaEnvelope /></a>
                        <a href="https://github.com/onjampitiavana" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/onjampitiavana" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://wa.me/261325292401" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                    </div>
                    <div>
                        <a href="/db-test.pdf" download>
                            <button className="flex items-center gap-2 mt-1 md:gap-4 md:mt-2 cursor-pointer"><FaDownload /> Download CV</button>
                        </a>
                    </div>
                </div>
            </div> 
        </div>
    );
}
export default Home;