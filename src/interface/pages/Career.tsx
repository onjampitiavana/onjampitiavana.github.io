import masovia from "../../assets/masovia.jpg";
import karoka from "../../assets/karoka.png";
import mortier from "../../assets/mortier.png"
import Card from "../components/Card";
import eni from "../../assets/eni.png"
function Career() {
    return (  
        <div className=" mt-8">
            <h2 className="text-3xl font-stretch-50%">Explore my journey, one step at a time</h2>
           <div className="ml-4 flex-row mt-8">
             <div className="flex items-center gap-2">
                <Card image={eni} title="3e anne licence pro" description="blblablaaa"
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow"  />
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Card image={masovia} title="Masovia Madagascar" description="Realisation d'une application pour vente du ticket"
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow" />
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Card image={karoka} title="Stage karoka" description="cin matching"
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow"  />
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Card image={mortier} title="bac serie c" description="lpscof"
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow"  />
            </div>
            <div>
                <Card image={mortier} title="bac serie A" description="mention assez bien lpa" 
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow" />
            </div>
           </div>
        </div>
        );
}

export default Career;