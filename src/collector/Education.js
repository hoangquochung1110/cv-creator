import EducationUnit from "./Units/EducationUnit";

const Education = ({ 
    education, 
    onAddEducation, 
    onDeleteEducation, 
    onChangeEducation
}) => {
    return (
        <div className="education-wrapper"> 
            { education.map((educationUnit) => {
                return(
                    <EducationUnit 
                        key={educationUnit.id}
                        id={educationUnit.id}
                        isDefaultUnit={educationUnit.isDefaultUnit}
                        onAddEducation={onAddEducation}
                        onDeleteEducation={onDeleteEducation}
                        onChangeEducation={onChangeEducation}
                    />
                )
            })}
        </div>
        
    )
}

export default Education;