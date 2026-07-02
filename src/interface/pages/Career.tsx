import masovia from "../../assets/masovia.jpg";
import karoka from "../../assets/karoka.png";
import mortier from "../../assets/mortier.png"
import Card from "../components/Card";
import eni from "../../assets/eni.png"
import { FiStar} from "react-icons/fi";
function Career() {
    return (  
        <div className=" mt-8">
            <h2 className="text-2xl md:text-3xl font-stretch-50%">Explore my journey, one step at a time</h2>
           <div className="ml-4 flex-row mt-8">
             <div className="flex items-center gap-2">
                <Card image={eni} title="3rd year Bachelor’s in Software Engineering and Database Systems" description="Ecole Nationale d'Informatique - Universite de Fianarantsoa"
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow" type="Education" year="2026" iconType={<FiStar/>} />
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Card image={masovia} title="Masovia Madagascar" description="Developed a mobile ticketing application and contributed to database design and modeling for several software projects." iconType={<FiStar/>} type="Internship" 
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow" year="oct.- dec. 2025"/>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Card image={karoka} title="karoka.net" description="Developed a web application that extracts information from national ID cards (CIN) by scanning the card or uploading its PDF, using OCR for automated data extraction." iconType={<FiStar/>}
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow" type="Internship" year="sept. 2025"/>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Card image={mortier} title="Baccalaureate Series C" description="Lycee Prive Sacre Coeur de Fandriana" type="Education" iconType={<FiStar/>}
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow"  year="2023" />
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Card  image={mortier} title="Baccalaureate Series A2" description="Lycee Prive Avotra - Fandriana" type="Education" iconType={<FiStar/>}
                style="w-80 md:w-150 rounded-2xl  bg-white p-4 shadow"  year="2022"/>
            </div>
           </div>
        </div>
        );
}

export default Career;