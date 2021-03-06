import Personal from "./Personal";
import Qualification from "./Qualification";
import ResumeWrapper from "./Styles";

const Resume = ({
    collection,
    fontFamily,
    fontSize,
    setSection,
    setOnClicked,
}) => {
    return (
        <ResumeWrapper
            id="resume-container"
            fontSize={fontSize}
            fontFamily={fontFamily}
        >
            <Personal personal={collection.personal} />
            <Qualification
                education={collection.education}
                workExp={collection.workExp}
                skills={collection.skills}
                setSection={setSection}
                setOnClicked={setOnClicked}
            />
        </ResumeWrapper>
    );
};

export default Resume;
