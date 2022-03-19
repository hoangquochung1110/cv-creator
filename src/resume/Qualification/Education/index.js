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
            <EducationUnitHeaderWrapper contentEditable="true">
                <TextAligned aligned="left" weight="700">{educationUnit.studyProgram}</TextAligned>
                {educationUnit.eduFrom && educationUnit.eduTo ? <TextAligned aligned="right">{educationUnit.eduFrom} - {educationUnit.eduTo}</TextAligned> : <></>}
            </EducationUnitHeaderWrapper>
            <EducationUnitSubWrapper contentEditable="true">
                <TextAligned>{educationUnit.eduName}</TextAligned>
                <TextAligned aligned="right">{educationUnit.eduPlace}</TextAligned>
            </EducationUnitSubWrapper>
            <EducationUnitDescWrapper contentEditable="true">
                {educationUnit.description}
            </EducationUnitDescWrapper>
        </EducationUnitWrapper>
    )
}

export default Education;