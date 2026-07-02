type Project={
    image?:string,
    title?:string,
    stack?:string,
    description?:string
}


const ProjectCard:React.FC<Project>= ({image, title, stack, description})=> {
    return (  
        <div className="">
        <img src={image} alt={title}/>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{stack}</p>
        </div>
        </div>
    );
}

export default ProjectCard;