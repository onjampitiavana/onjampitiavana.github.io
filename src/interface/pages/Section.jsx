import Home from "./Home"
import About from "./About"
import Career from "./Career"
import Project from "./Project";
function Section() {
    return ( 
        <div>
        <div id="home"><Home/></div>
        <div id="about"><About/></div>
        <div id="career"><Career/></div>
        <div id="project"> <Project/> </div>
        </div>
     );
}

export default Section;