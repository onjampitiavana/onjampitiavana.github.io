type skill = {
    image?: string;
    classname?:string;
}
type SkillsListProps = {
    title?: string;
    skills: skill[];
}

const SkillsList: React.FC<SkillsListProps> = ({ title, skills }) => {
    return (
        <div className="mt-5">
            <h3>{title}</h3>
            <ul className="grid grid-cols-3 md:flex gap-3 md:gap-8 items-center">
                {
                    skills.map((skill,index) => (
                        <li key={index} className="md:w-auto" ><img src={skill.image} alt="skill" className={skill.classname}/></li>
                    ))
                }
            </ul>
        </div>
    );
}
export default SkillsList;