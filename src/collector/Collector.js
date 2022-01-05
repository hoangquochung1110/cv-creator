import Education from "./Education/Education";
import Personal from "./Personal/Personal";
import WorkExp from "./WorkExp/WorkExp";
import Skills from "./Skills/Skills";
import CollectorWrapper from "./style";

const Collector = ({
    collection, 

    onChangePersonal,

    onAddEducation,
    onDeleteEducation,
    onChangeEducation,

    onAddWorkExp,
    onDeleteWorkExp,
    onChangeWorkExp,

    onAddSkills,
    onDeleteSkills,
    onChangeSkills
}) => {
    return (
        <CollectorWrapper>
                <h3>Personal Information</h3>
                <Personal
                    personal={collection.personal}
                    onChangePersonal={onChangePersonal}
                />
                <h3>Education</h3>
                <Education
                    education={collection.education}
                    onAddEducation={onAddEducation}
                    onDeleteEducation={onDeleteEducation}
                    onChangeEducation={onChangeEducation}
                />
                <h3>Work Experience</h3>
                <WorkExp 
                    workExp={collection.workExp}
                    onAddWorkExp={onAddWorkExp}
                    onDeleteWorkExp={onDeleteWorkExp}
                    onChangeWorkExp={onChangeWorkExp}
                />
                <h3>Skills</h3>
                <Skills 
                    skills={collection.skills} 
                    onAddSkills={onAddSkills}
                    onDeleteSkills={onDeleteSkills}
                    onChangeSkills={onChangeSkills}
                />
        </CollectorWrapper>
    )
}

export default Collector;