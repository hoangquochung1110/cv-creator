import { SkillsUnitWrapper, SkillsWrapper } from "./styles"

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
            <div>{skillsUnit.name}</div>
            </SkillsUnitWrapper>
    )
}

export default Skills;