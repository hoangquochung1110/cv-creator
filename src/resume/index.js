import Personal from "./Personal";
import Qualification from "./Qualification";
import ResumeWrapper from "./Style";

const Resume = ({collection, font}) => {
    return (
        <ResumeWrapper font={font}>
            <Personal personal={collection.personal} />
            <Qualification 
                education={collection.education} 
                workExp={collection.workExp} 
                skills={collection.skills}
            />
        </ResumeWrapper>
    )
}

export default Resume;
