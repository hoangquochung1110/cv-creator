const EducationUnit = ({educationUnit}) => {
    return (
        <div>
            <h4>{educationUnit.studyProgram}</h4>
            <h6>{educationUnit.eduName}</h6>
            <h6>{educationUnit.eduPlace}</h6>
            {educationUnit.eduFrom && educationUnit.eduTo ? <h6>{educationUnit.eduFrom} - {educationUnit.eduTo}</h6> : <></>}
            
        </div>
    )
}

export default EducationUnit;