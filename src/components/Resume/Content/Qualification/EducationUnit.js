const EducationUnit = ({educationUnit}) => {
    return (
        <div className="education-unit">
            <div className="education-unit-header">
                <h4 className="text-align-left">{educationUnit.studyProgram}</h4>
                {educationUnit.eduFrom && educationUnit.eduTo ? <h6 className="text-align-right">{educationUnit.eduFrom} - {educationUnit.eduTo}</h6> : <></>}
            </div>
            <div className="education-unit-sub">
                <h6 className="text-align-left">{educationUnit.eduName}</h6>
                <h6 className="text-align-right">{educationUnit.eduPlace}</h6>
            </div>

            
        </div>
    )
}

export default EducationUnit;