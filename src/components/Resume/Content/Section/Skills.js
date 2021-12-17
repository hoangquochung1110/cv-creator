import SkillsUnit from "./SkillsUnit";

const Skills = ({skills}) => {
    return (
        <div className='resume-skills'>
                { skills.map((skillsUnit) => {
                        return (
                            <SkillsUnit key={skillsUnit.id} skillsUnit={skillsUnit}/>
                        )
                })}
        </div>
    )
}

export default Skills;