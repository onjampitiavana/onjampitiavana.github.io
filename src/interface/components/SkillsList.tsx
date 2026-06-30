type skill = {
    name?: string;
    image?: string;
}
type SkillsListProps = {
    title?: string;
    skills: skill[];
}

const SkillsList: React.FC<SkillsListProps> = ({ title, skills }) => {
    return (
        <div>
            <h3>{title}</h3>
            <ul className="flex gap-4">
                {
                    skills.map((skill) => (
                        <li key={skill.name}><img src={skill.image} alt={skill.name} className="w-30 ml-2"/>
                            <span className="font-semibold">{skill.name}</span></li>
                    ))
                }
            </ul>
        </div>
    );
}
export default SkillsList;