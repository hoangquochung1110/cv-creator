import EducationUnit from './EducationUnit';
import WorkExpUnit from './WorkExpUnit';

const Qualification = ({education, workExp}) => {
    return (
        <div className="qualification">
            <div className='resume-education'>
                <h3>Education</h3>
                { education.map((educationUnit) => {
                        console.log(educationUnit);
                        return (
                            <EducationUnit key={educationUnit.id} educationUnit={educationUnit}/>
                        )
                })}
            </div>

            <div className='resume-workexp'>
                <h3>Work Experience</h3>
                { workExp.map((workExpUnit) => {
                    return (
                        <WorkExpUnit key={workExpUnit.id} workExpUnit={workExpUnit} />
                    )
                })}
            </div>

        </div>
    )
}

export default Qualification;