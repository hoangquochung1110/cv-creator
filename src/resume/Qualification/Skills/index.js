import { SkillsUnitWrapper, SkillsWrapper } from "./Styles"

const Skills = ({skills}) => {
    return (
        <SkillsWrapper>
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
        <SkillsUnitWrapper>
            <div contentEditable="true">{skillsUnit.name}</div>
            </SkillsUnitWrapper>
    )
}

export default Skills;