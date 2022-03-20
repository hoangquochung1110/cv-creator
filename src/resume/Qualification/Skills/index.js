import { SkillsUnitWrapper, SkillsWrapper } from "./Styles"

const Skills = ({skills, setSection}) => {
    return (
        <SkillsWrapper
            className="skills-section"
            onClick={(e) => {
                const sectionID = e.target.id;
                console.log(e.target);
                setSection(e, "skills", sectionID);
            }}
        >
            { skills.map((skillsUnit) => {
                    return (
                        <SkillsUnit key={skillsUnit.id} skillsUnit={skillsUnit}/>
                    )
            })}
        </SkillsWrapper>
    )
}

const SkillsUnit = ({skillsUnit}) => {
    return (
        <SkillsUnitWrapper
            className="skills-unit"
            contentEditable="true"
        >
            {skillsUnit.name}
        </SkillsUnitWrapper>
    )
}

export default Skills;