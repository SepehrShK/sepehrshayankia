import type { IconType } from "react-icons";

interface SkillsCompProps {
    Icon: IconType;
    label: string;
}

const SkillsComp: React.FC<SkillsCompProps> = ({ Icon, label }) => {
    return (
        <div className="skill">
            <Icon className="skill-icon"/>
            <span>{label}</span>
        </div>
    )
}

export default SkillsComp
