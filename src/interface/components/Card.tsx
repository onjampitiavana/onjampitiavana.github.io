

type CardProps = {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    image?:string;
    style?:string;
    type?:string;
    buttonStyle?:string;
    year?:string;
    yearStyle?:string;
}

const Card: React.FC<CardProps> = ({title, description, icon,image, style, type, buttonStyle,year,yearStyle})=>{
    return(
        <div className={style}>
            <div className="">
                <div className="flex items-center gap-2 mb-2">
                {icon && <span className="text-xl">{icon}</span>}
                <h3 className="md:text-xl font-bold flex gap-2 items-center">  {image && (
                <img src={image} alt={title}
                className="w-15 rounded-4xl"/>
            )} {title}</h3>
            </div>
            <p>{description}</p>
            <div className="flex items-center gap-4">
            <div><button className={buttonStyle}>{type}</button></div>
            <div><p className="italic">{year}</p></div>
            </div>
            </div>
        </div>
    )
}
export default Card;