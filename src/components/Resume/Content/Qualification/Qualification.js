import EducationUnit from './EducationUnit';
import WorkExpUnit from './WorkExpUnit';
import Section from '../Section/Section';

const Qualification = ({education, workExp}) => {
    return (
        <div className="qualification">
            <Section name="Education"/>
            <div className='resume-education'>
                { education.map((educationUnit) => {
                        console.log(educationUnit);
                        return (
                            <EducationUnit key={educationUnit.id} educationUnit={educationUnit}/>
                        )
                })}
            </div>

            <Section name="Work Experience" />

            { <div className='resume-workexp'>
                { workExp.map((workExpUnit) => {
                    return (
                        <WorkExpUnit key={workExpUnit.id} workExpUnit={workExpUnit} />
                    )
                })}
            </div> }

        </div>
    )
}

export default Qualification;