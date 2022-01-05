import Personal from "./Section/Personal";
import Qualification from "./Qualification/Qualification";

const Content = ({collection}) => {
    return (
        <div className="resume-content">
            <Personal personal={collection.personal} />
            <Qualification 
                education={collection.education} 
                workExp={collection.workExp} 
                skills={collection.skills}
            />
        </div>
    )
}

export default Content;