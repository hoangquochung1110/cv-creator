import { 
    EducationUnitDescWrapper, 
    EducationUnitHeaderWrapper, 
    EducationUnitSubWrapper, 
    EducationUnitWrapper, 
    EducationWrapper, 
} from "./Styles"
import TextAligned from "../../../styles/TextAligned";

const Education  = ({education}) => {
    return (
        <EducationWrapper>
                { education.map((educationUnit) => {
                        return (
                            <EducationUnit key={educationUnit.id} educationUnit={educationUnit}/>
                        )
                })}
        </EducationWrapper>
    )
}

const EducationUnit = ({educationUnit}) => {
    return (
        <EducationUnitWrapper>
            <EducationUnitHeaderWrapper>
                <TextAligned aligned="left" weight="700" contentEditable="true">{educationUnit.studyProgram}</TextAligned>
                {educationUnit.eduFrom && educationUnit.eduTo ? <TextAligned aligned="right" contentEditable="true">{educationUnit.eduFrom} - {educationUnit.eduTo}</TextAligned> : <></>}
            </EducationUnitHeaderWrapper>
            <EducationUnitSubWrapper>
                <TextAligned contentEditable="true">{educationUnit.eduName}</TextAligned>
                <TextAligned aligned="right" contentEditable="true">{educationUnit.eduPlace}</TextAligned>
            </EducationUnitSubWrapper>
            <EducationUnitDescWrapper>
                <div className="f-size-80" contentEditable="true">{educationUnit.description}</div>
            </EducationUnitDescWrapper>

            
        </EducationUnitWrapper>
    )
}

export default Education;