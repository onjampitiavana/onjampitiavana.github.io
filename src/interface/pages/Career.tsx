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
                <Card image={eni} title="3rd year Bachelor’s in Software Engineering and Database Systems" description="Ecole Nationale d'Informatique - Universite de Fianarantsoa"
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow" type="Education" buttonStyle="px-2 py-1 bg-gray-500 rounded-4xl" 
                year="2026" yearStyle="mt-4 italic" />
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Card image={masovia} title="Masovia Madagascar" description="Realisation d'une application pour vente du ticket"
                type="Stage" buttonStyle="px-2 py-1 bg-gray-500 rounded-4xl"
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow" year="oct.- nov. 2025" yearStyle="mt-4 italic" />
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Card image={karoka} title="Stage karoka" description="cin matching"
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow" buttonStyle="px-2 py-1 bg-gray-500 rounded-4xl" type="Stage" year="sept. 2025" yearStyle="mt-4 italic" />
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Card image={mortier} title="bac serie c" description="lpscof" type="Education"
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow" buttonStyle="px-2 py-1 bg-gray-500 rounded-4xl" year="2023" yearStyle="italic mt-4" />
            </div>
            <div>
                <Card image={mortier} title="bac serie A" description="mention assez bien lpa" type="Education"
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow" buttonStyle="px-2 py-1 bg-gray-500 rounded-4xl" year="2022" yearStyle="mt-4 italic" />
            </div>
           </div>
        </div>
        );
}

export default Career;