import EducationUnit from "./EducationUnit";
import { EducationWrapper } from "./styles";

const Education = ({ 
    education, 
    onAddEducation, 
    onDeleteEducation, 
    onChangeEducation
}) => {
    return (
        <EducationWrapper>
            { education.map((educationUnit) => {
                return(
                    <EducationUnit 
                        key={educationUnit.id}
                        id={educationUnit.id}
                        educationUnit={educationUnit}
                        isDefaultUnit={educationUnit.isDefaultUnit}
                        onAddEducation={onAddEducation}
                        onDeleteEducation={onDeleteEducation}
                        onChangeEducation={onChangeEducation}
                    />
                )
            })}
        </EducationWrapper>
        
    )
}

export default Education;