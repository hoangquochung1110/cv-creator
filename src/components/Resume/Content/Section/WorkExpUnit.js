const WorkExpUnit = ({workExpUnit}) => {
    return (
        <div className="resume-work-exp-unit">
            <div className="work-exp-unit-header">
                <h4 className="text-align-left">{workExpUnit.jobTitle}</h4>
                {workExpUnit.workFrom && workExpUnit.workTo ? <h6 className="text-align-right">{workExpUnit.workFrom} - {workExpUnit.workTo}</h6> : <></>}
            </div>
            <div className="work-exp-unit-sub">
                <div className="text-align-left">{workExpUnit.orgName}</div>
                <div className="text-align-right">{workExpUnit.orgPlace}</div>
            </div>

        </div>
    )
}

export default WorkExpUnit;
