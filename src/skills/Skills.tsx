import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMui, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import './Skills.css'
import SkillsComp from "../components/SkillsComp";

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h3>مهارت های من</h3>
            <div className="skills-box">
                <SkillsComp Icon={FaReact} label="React"/>
                <SkillsComp Icon={RiNextjsFill} label="NextJS"/>
                <SkillsComp Icon={IoLogoJavascript} label="JavaScript"/>
                <SkillsComp Icon={SiTypescript} label="TypeScript"/>
                <SkillsComp Icon={FaHtml5} label="HTML"/>
                <SkillsComp Icon={FaCss3Alt} label="CSS"/>
                <SkillsComp Icon={RiTailwindCssFill} label="Tailwind"/>
                <SkillsComp Icon={SiMui} label="Material UI"/>
                <SkillsComp Icon={FaAngular} label="Angular"/>
                <SkillsComp Icon={FaPython} label="Python"/>
            </div>
        </section>
    )
}

export default Skills
