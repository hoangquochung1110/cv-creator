import { 
    EducationUnitDescWrapper, 
    EducationUnitHeaderWrapper, 
    EducationUnitSubWrapper, 
    EducationUnitWrapper, 
    EducationWrapper, 
} from "./Styles"
import TextAligned from "../../../styles/TextAligned";

const Education  = ({education, setSection}) => {

    return (
        <EducationWrapper 
            className="education-section"
            onClick={(e) => {
                console.log(e.target.closest(".education-unit").id);
                const sectionID = e.target.closest(".education-unit").id
                setSection(e, "education", sectionID);
            }}
        >
            { education.map((educationUnit) => {
                    return (
                        <EducationUnit id={educationUnit.id} key={educationUnit.id} educationUnit={educationUnit}/>
                    )
            })}
        </EducationWrapper>
    )
}

const EducationUnit = ({id, educationUnit}) => {
    return (
        <EducationUnitWrapper id={id} className="education-unit">
            <EducationUnitHeaderWrapper>
                <div contentEditable="true">{educationUnit.studyProgram}</div>
                {educationUnit.eduFrom && educationUnit.eduTo ? 
                    <div contentEditable="true">{educationUnit.eduFrom} - {educationUnit.eduTo}</div> 
                : 
                    <></>
                }
            </EducationUnitHeaderWrapper>
            <EducationUnitSubWrapper>
                <div contentEditable="true">{educationUnit.eduName}</div>
                <div contentEditable="true">{educationUnit.eduPlace}</div>
            </EducationUnitSubWrapper>
            <EducationUnitDescWrapper contentEditable="true">
                {educationUnit.description}
            </EducationUnitDescWrapper>
        </EducationUnitWrapper>
    )
}

export default Education;