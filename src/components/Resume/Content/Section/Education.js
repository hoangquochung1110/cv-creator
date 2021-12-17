import EducationUnit from "./EducationUnit";

const Education  = ({education}) => {
    return (
        <div className='resume-education'>
                { education.map((educationUnit) => {
                        return (
                            <EducationUnit key={educationUnit.id} educationUnit={educationUnit}/>
                        )
                })}
            </div>
    )
}

export default Education;