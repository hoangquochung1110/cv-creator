import { EducationUnitDescWrapper, EducationUnitHeaderWrapper, EducationUnitSubWrapper, EducationUnitWrapper, EducationWrapper } from "./styles"

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
                <h4 className="text-align-left">{educationUnit.studyProgram}</h4>
                {educationUnit.eduFrom && educationUnit.eduTo ? <h6 className="text-align-right">{educationUnit.eduFrom} - {educationUnit.eduTo}</h6> : <></>}
            </EducationUnitHeaderWrapper>
            <EducationUnitSubWrapper>
                <div className="text-align-left">{educationUnit.eduName}</div>
                <div className="text-align-right">{educationUnit.eduPlace}</div>
            </EducationUnitSubWrapper>
            <EducationUnitDescWrapper>
                <div className="f-size-80">{educationUnit.description}</div>
            </EducationUnitDescWrapper>

            
        </EducationUnitWrapper>
    )
}

export default Education;