import Personal from "./Personal";
import Qualification from "./Qualification";
import ResumeWrapper from "./Style";

const Resume = ({collection, font, setSection}) => {
    return (
        <ResumeWrapper font={font}>
            <Personal personal={collection.personal} />
            <Qualification 
                education={collection.education} 
                workExp={collection.workExp} 
                skills={collection.skills}
                setSection={setSection}
            />
        </ResumeWrapper>
    )
}

export default Resume;
