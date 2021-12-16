import Education from "./Education";
import Personal from "./Personal";
import WorkExp from "./WorkExp";
import Skills from "./Skills";

const CollectorContainer = ({
    collection, 

    onChangePersonal,

    onAddEducation,
    onDeleteEducation,
    onChangeEducation,

    onAddWorkExp,
    onDeleteWorkExp,

    onAddSkills,
    onDeleteSkills,
    onChangeSkills
}) => {
    return (
        <div className="collector-container">
            <div className="collector">
                <h3>Personal Information</h3>
                <Personal
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
                />
                <h3>Skills</h3>
                <Skills 
                    skills={collection.skills} 
                    onAddSkills={onAddSkills}
                    onDeleteSkills={onDeleteSkills}
                    onChangeSkills={onChangeSkills}
                />
            </div>
        </div>
    )
}

export default CollectorContainer;