import Personal from "./Personal";
import Qualification from "./Qualification/Qualification";

const Content = ({collection}) => {
    return (
        <div className="resume-content">
            <Personal personal={collection.personal} />
            <Qualification education={collection.education} workExp={collection.workExp} />
            {/* <h3>Skills</h3>
            <div className="resume-skills">
                {collection.skills.map((skillsUnit) => {
                    return <SkillButton key={skillsUnit.key} text={skillsUnit.name}/>
                })}
            </div> */}
        </div>
    )
}

export default Content;