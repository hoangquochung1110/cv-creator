const EducationUnit = ({educationUnit}) => {
    return (
        <div className="resume-education-unit">
            <div className="education-unit-header">
                <h4 className="text-align-left">{educationUnit.studyProgram}</h4>
                {educationUnit.eduFrom && educationUnit.eduTo ? <h6 className="text-align-right">{educationUnit.eduFrom} - {educationUnit.eduTo}</h6> : <></>}
            </div>
            <div className="education-unit-sub">
                <div className="text-align-left">{educationUnit.eduName}</div>
                <div className="text-align-right">{educationUnit.eduPlace}</div>
            </div>
            <div className="education-unit-desc">
                <div className="f-size-80">{educationUnit.description}</div>
            </div>

            
        </div>
    )
}

export default EducationUnit;