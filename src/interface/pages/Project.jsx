import portfolio from "../../assets/portfolio.png"
function Project() {
    return ( 
        <div className="mt-8">
            <p>Arovy</p>
            <div className="mt-8 w-80 bg-amber-700 h-90 rounded-lg">
                <img src={portfolio} className="w-80 h-40 hover:scale-100 shadow-md cursor-pointer translate-0 duration-100"/>
            <p>Portfolio</p>
            </div>
            <p>hometown</p>
            <p>Qr</p>
        </div>
     );
}

export default Project;