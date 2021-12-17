import SectionBreaker from '../Section/SectionBreaker';
import Education from '../Section/Education';
import WorkExp from '../Section/WorkExp';
import Skills from '../Section/Skills';

const Qualification = ({education, workExp, skills}) => {
    console.log(skills);
    return (
        <div className="qualification">
            <SectionBreaker name="Education"/>
            <Education education={education} />

            <SectionBreaker name="Work Experience" />
            <WorkExp workExp={workExp} />

            <SectionBreaker name="Skills" />
            <Skills skills={skills} />

        </div>
    )
}

export default Qualification;