

type CardProps = {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    image?:string;
    style?:string;
    type?:string;
    buttonStyle?:string;
    year?:string;
    iconType?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({title, description, icon,image, style, type, year,iconType})=>{
    return(
        <div className={style}>
            <div>
                <div className="flex items-center gap-2 mb-2">
                {icon && <span className="text-xl">{icon}</span>}
                <h3 className="md:text-xl font-bold flex gap-2 items-center">  {image && (
                <img src={image} alt={title}
                className="w-15 rounded-4xl"/>
            )} {title}</h3>
            </div>
            <p>{description}</p>
            <div className="flex items-center ml-15 gap-4 mt-2 italic ">
            <div><button className="flex items-center gap-2"> {iconType} {type}</button></div>
            <div><p>{year}</p></div>
            </div>
            </div>
        </div>
    )
}
export default Card;