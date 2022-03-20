import Personal from "./Personal";
import Qualification from "./Qualification";
import ResumeWrapper from "./Style";

const Resume = ({
    collection,
    fontFamily,
    fontSize,
    setSection
}) => {
    return (
        <ResumeWrapper fontSize={fontSize} fontFamily={fontFamily}>
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
