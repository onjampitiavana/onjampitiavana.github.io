import { FaDatabase, FaLaptop } from "react-icons/fa";
import Card from "../components/Card";
import { BsDiagram3 } from "react-icons/bs";
import { TbServer } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";

function About() {
    //developpement web, mobile
    //architecture & genie logiciel
    //base de donnees
    //backend & API
    return ( 
        <div id="about" className="mt-8">
            <div>
                <button className="md:px-8 md:py-4 flex items-center px-3 gap-2 md:gap-3  hover:translate-1 rounded shadow-md bg-gray-500 hover:scale-100 transition-all duration-100 cursor-pointer hover:bg-white">
                    <BiChevronDown size={40}/> <span>Learn about me</span> </button>
            </div>
            <div className="mt-4">
                <p className="text-xl"><span className="ml-8">I am a <span className="font-bold">junior developer</span></span> passionate about building useful solutions and creating functional systems. 
                I enjoy analyzing problems in depth and turning ideas into real, working applications.
                 Focused on design and project logic, I aim to build solid and scalable foundations. 
                 When facing technical challenges, I stay persistent and see every bug as a learning opportunity. 
                 Working in a team also helps me grow and discover new approaches. 
                 My goal is to develop digital solutions with a positive impact and to keep evolving toward more ambitious projects.
            </p>
            </div>
            <div>
               <div className="md:flex items-center gap-6 ">
                 <div className="mt-4">
                    <Card icon={<FaLaptop/>} title="Web & Mobile Development"
                description="I build modern web and mobile applications designed to deliver smooth,
                 intuitive, and high-performance experiences, from design to deployment."
                 style="w-80 md:w-150 rounded-2xl  bg-white p-4 hover:scale-105 duration-100 transition-all shadow" />
                 </div>
                 <div className="mt-4">
                    <Card icon={<BsDiagram3/>} title="Software Design & Architecture"
                 description="I build well-structured software solutions 
                 by applying design principles, best practices, and scalable architectures."
                 style="w-80 md:w-150 rounded-2xl  bg-white p-4 hover:scale-105 duration-100 transition-all shadow" />
                 </div>
               </div>
                 <div className="md:flex items-center gap-6">
                    <div className="mt-4">
                        <Card icon={<FaDatabase/>} title="Databases"
                 description="I design, manage, and optimize reliable and efficient databases,
                  ensuring proper data organization, performance, and security."
                  style="w-80 md:w-150 rounded-2xl  bg-white p-4 hover:scale-105 duration-100 transition-all shadow" />
                    </div>
                <div className="mt-4">
                     <Card icon={<TbServer/>} title="Backend & APIs" 
                 description="I develop robust backend systems and efficient APIs to connect applications,
                  handle business logic, and enable secure data exchange" 
                  style="w-80 md:w-150 rounded-2xl  bg-white p-4 hover:scale-105 duration-100 transition-all shadow" />
                </div>
                 </div>
            </div>
        </div>
     );
}

export default About;