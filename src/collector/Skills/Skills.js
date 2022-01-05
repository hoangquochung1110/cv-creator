import SkillsUnit from "./SkillsUnit";
import { SkillsWrapper } from "./styles";

const Skills = ({skills, onAddSkills, onDeleteSkills, onChangeSkills}) => {
    return (
        <SkillsWrapper>
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
        </SkillsWrapper>
    )
}

export default Skills;
