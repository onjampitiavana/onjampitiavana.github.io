import portfolio from "../../assets/portfolio.png"
function Project() {
    return ( 
        <div className="mt-8">
            <div>
                <p>Arovy</p>
            <div className="mt-8 w-80 bg-amber-700 h-90 rounded-lg">
                <img src={portfolio} className="w-80 h-40 hover:scale-100 shadow-md cursor-pointer translate-0 duration-100"/>
            <p>Portfolio</p>
            </div>
            <p>hometown</p>
            <p>Qr</p>
            </div>
            <div>
                <div className="flex items-center gap-8">
               <div className="">
                <h2>Contactez</h2>
                 <input type="text" placeholder=" your name" className="w-80 h-10 rounded-lg border-2" /> <br/>
                <input type="text" placeholder=" your name" className="w-80 mt-2 h-10 border-2 rounded-lg" /><br/>
                <input type="text" placeholder=" your message" className="w-80 h-20 border-2 rounded-lg mt-2"/><br/>
               </div>
               <div>
                <h2 className="text-4xl">
                    Let's work together
                </h2>
               </div>
               </div>
               <div className="mt-5">
                <p className="text-center">@ developed with heart by onjampitiavana</p>
               </div>
            </div>
            <div className="mt-5">

            </div>
        </div>
     );
}

export default Project;