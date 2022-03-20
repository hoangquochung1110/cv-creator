import Education from './Education';
import WorkExp from './WorkExp';
import Skills from './Skills';
import LineBreak from '../../components/LineBreak';
import QualificationWrapper from './Styles';

const Qualification = ({
    education,
    workExp,
    skills,
    setSection,
    setOnClicked
}) => {
    return (
        <QualificationWrapper>
            <LineBreak name="Education"/>
            <Education education={education} setSection={setSection} setOnClicked={setOnClicked}/>

            <LineBreak name="Work Experience" />
            <WorkExp workExp={workExp} setSection={setSection} setOnClicked={setOnClicked}/>

            <LineBreak name="Skills"/>
            <Skills skills={skills} setSection={setSection} setOnClicked={setOnClicked}/>

        </QualificationWrapper>
    )
}

export default Qualification;