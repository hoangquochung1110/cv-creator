const WorkExpUnit = ({workExpUnit}) => {
    return (
        <div>
            <h4>{workExpUnit.jobTitle}</h4>
            {workExpUnit.orgName && workExpUnit.orgPlace ? <h6>{workExpUnit.orgName} - {workExpUnit.orgPlace}</h6> : <></>}
            {workExpUnit.workFrom && workExpUnit.workTo ? <h6>{workExpUnit.workFrom} - {workExpUnit.workTo}</h6> : <></>}
        </div>
    )
}

export default WorkExpUnit;