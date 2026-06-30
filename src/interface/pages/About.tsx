import { FaDatabase, FaLaptop } from "react-icons/fa";
import Card from "../components/Card";
import { BsDiagram3 } from "react-icons/bs";
import { TbServer } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import SkillsList from "../components/SkillsList";
import {js,ts,php,sql, nosql, react, native, laravel, vue, express, postgres,mysql,sqlite,mongo,html,css,tailwind,rest, git, github, n8n, docker} from "../../assets/Import"

function About() {
    return ( 
        <div id="about" className="mt-8">
            <div className="ml-15 md:ml-auto">
                <button className="md:px-8 md:py-4 flex items-center px-3 gap-2 md:gap-3  hover:translate-1 rounded shadow-md bg-gray-500 hover:scale-100 transition-all duration-100 cursor-pointer hover:bg-white">
                    <BiChevronDown size={40}/> <span>Learn about me</span> </button>
            </div>
            <div className="mt-4">
                <p className="md:text-xl">I am a <span className="font-bold">junior developer</span> passionate about creating useful digital solutions and functional systems.
                 I enjoy solving problems, turning ideas into real applications, and designing solid and scalable projects. 
                 Curious and persistent when facing technical challenges, I see every difficulty as an opportunity to learn. 
                 Teamwork also helps me grow and explore new approaches. My goal is to create innovative solutions with a positive impact.
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
                 <div>
                    <h2 className="text-xl mt-4 ml-8">SKILLS</h2>
                    <div>
                        <SkillsList title="Languages" skills={[{image:js},
                            {image:ts}, {image:php}, {image:sql},{image:nosql}
                        ]}/>
                        <SkillsList title="Stacks & Librairies" skills={[{image:react}, {image:vue}, {image:native}, {image:express},{image:laravel}]}/>
                        <SkillsList title="Databases" skills={[{image:postgres}, {image:mysql}, {image:sqlite}, {image:mongo}]}/>
                        <SkillsList title="Web technologies" skills={[{image:html}, {image:css}, {image:tailwind}, {image:rest}]}/>
                        <SkillsList title="Tools" skills={[{image:git}, {image:github}, {image:docker}, {image:n8n}]}/>
                    </div>
                 </div>
            </div>
        </div>
     );
}

export default About;