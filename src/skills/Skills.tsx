import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
// import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

import './Skills.css'
import SkillsComp from "../components/SkillsComp";

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h3>مهارت های من</h3>
            <div className="skills-box">
                <SkillsComp Icon={FaHtml5} label="HTML"/>
                <SkillsComp Icon={FaCss3Alt} label="CSS"/>
                <SkillsComp Icon={IoLogoJavascript} label="JavaScript"/>
                <SkillsComp Icon={SiTypescript} label="TypeScript"/>
                <SkillsComp Icon={FaReact} label="React"/>
                <SkillsComp Icon={FaAngular} label="Angular"/>
                <SkillsComp Icon={FaPython} label="Python"/>
                {/* <SkillsComp Icon={RiNextjsFill} label="Nextjs"/> */}
                {/* <SkillsComp Icon={RiTailwindCssFill} label="Tailwind"/> */}
            </div>
        </section>
    )
}

export default Skills
