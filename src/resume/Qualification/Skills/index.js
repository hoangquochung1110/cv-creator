import { SkillsUnitWrapper, SkillsWrapper } from "./Styles";

const Skills = ({ skills, setSection, setOnClicked }) => {
    return (
        <SkillsWrapper
            className="skills-section"
            onClick={(e) => {
                const sectionID = e.target.id;
                console.log(e.target);
                setSection(e, "skills", sectionID);
                setOnClicked();
            }}
        >
            {skills.map((skillsUnit) => {
                return (
                    <SkillsUnit
                        id={skillsUnit.id}
                        key={skillsUnit.id}
                        skillsUnit={skillsUnit}
                    />
                );
            })}
        </SkillsWrapper>
    );
};

const SkillsUnit = ({ id, skillsUnit }) => {
    return (
        <SkillsUnitWrapper
            id={id}
            className="skills-unit"
            contentEditable="true"
        >
            {skillsUnit.name}
        </SkillsUnitWrapper>
    );
};

export default Skills;
