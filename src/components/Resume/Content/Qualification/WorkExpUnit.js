const WorkExpUnit = ({workExpUnit}) => {
    return (
        <div className="work-exp-unit">
            <div className="work-exp-unit-header">
                <h4 className="text-align-left">{workExpUnit.jobTitle}</h4>
                {workExpUnit.workFrom && workExpUnit.workTo ? <h6 className="text-align-right">{workExpUnit.workFrom} - {workExpUnit.workTo}</h6> : <></>}
            </div>
            <div className="work-exp-unit-sub">
                <h6 className="text-align-left">{workExpUnit.orgName}</h6>
                <h6 className="text-align-right">{workExpUnit.orgPlace}</h6>
            </div>

        </div>
    )
}

export default WorkExpUnit;
