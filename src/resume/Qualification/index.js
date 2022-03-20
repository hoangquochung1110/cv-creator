import Education from './Education';
import WorkExp from './WorkExp';
import Skills from './Skills';
import LineBreak from '../../components/LineBreak';
import QualificationWrapper from './Styles';

const Qualification = ({education, workExp, skills, setSection}) => {
    return (
        <QualificationWrapper>
            <LineBreak name="Education"/>
            <Education education={education} setSection={setSection}/>

            <LineBreak name="Work Experience" />
            <WorkExp workExp={workExp} setSection={setSection}/>

            <LineBreak name="Skills"/>
            <Skills skills={skills} setSection={setSection}/>

        </QualificationWrapper>
    )
}

export default Qualification;