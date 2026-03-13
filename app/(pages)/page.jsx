import Intro from "../component/Intro";
import About from "./about/page";
import Contact from "./contact/page";
import Project from "./project/page";
import Skills from "./skill/page";

const page = () => {
    return (
        <div className="sm: mt-8">
            <Intro />
            <About />
            <Skills />
            <Project />
            <Contact />
        </div>
    )
}

export default page;