import SkillsUnit from "./Units/SkillsUnit";

const Skills = ({skills, onAddSkills, onDeleteSkills, onChangeSkills}) => {
    // console.log(skills);
    return (
        <div className="skills-wrapper">
            { skills.map((unit) => {
                    return (
                        <SkillsUnit 
                            key={unit.key} 
                            id={unit.id}
                            isDefaultUnit={unit.isDefaultUnit} 
                            name={unit.name}
                            changeUnit={onChangeSkills}
                            addUnit={onAddSkills}
                            deleteUnit={onDeleteSkills}

                        />
                    )
                })}
        </div>
    )
}

export default Skills;
