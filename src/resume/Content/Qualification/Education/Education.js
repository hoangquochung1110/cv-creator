import { 
    EducationUnitDescWrapper, 
    EducationUnitHeaderWrapper, 
    EducationUnitSubWrapper, 
    EducationUnitWrapper, 
    EducationWrapper, 
} from "./styles"
import TextAligned from "../../../../styles/TextAligned";

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
                <TextAligned aligned="left">{educationUnit.studyProgram}</TextAligned>
                {educationUnit.eduFrom && educationUnit.eduTo ? <TextAligned aligned="right">{educationUnit.eduFrom} - {educationUnit.eduTo}</TextAligned> : <></>}
            </EducationUnitHeaderWrapper>
            <EducationUnitSubWrapper>
                <TextAligned>{educationUnit.eduName}</TextAligned>
                <TextAligned aligned="right">{educationUnit.eduPlace}</TextAligned>
            </EducationUnitSubWrapper>
            <EducationUnitDescWrapper>
                <div className="f-size-80">{educationUnit.description}</div>
            </EducationUnitDescWrapper>

            
        </EducationUnitWrapper>
    )
}

export default Education;