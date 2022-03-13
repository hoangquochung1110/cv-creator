import Education from './Education';
import WorkExp from './WorkExp';
import Skills from './Skills';
import LineBreak from '../../components/LineBreak';
import QualificationWrapper from './Styles';

const Qualification = ({education, workExp, skills}) => {
    return (
        <QualificationWrapper>
            <LineBreak name="Education"/>
            <Education education={education} />

            <LineBreak name="Work Experience" />
            <WorkExp workExp={workExp} />

            <LineBreak name="Skills" />
            <Skills skills={skills} />

        </QualificationWrapper>
    )
}

export default Qualification;