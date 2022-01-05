import uniqid from 'uniqid';
import { WorkExpUnitWrapper } from '../../../../collector/WorkExp/styles';
import { WorkExpUnitDescWrapper, WorkExpUnitHeaderWrapper, WorkExpUnitSubWrapper, WorkExpWrapper } from './styles';

const WorkExp = ({workExp}) => {
    return (
        <WorkExpWrapper>
                { workExp.map((workExpUnit) => {
                    return (
                        <WorkExpUnit key={workExpUnit.id} workExpUnit={workExpUnit} />
                    )
                })}
        </WorkExpWrapper>
    )
}

const WorkExpUnit = ({workExpUnit}) => {
    return (
        <WorkExpUnitWrapper>
            <WorkExpUnitHeaderWrapper>
                <h4 className="text-align-left">{workExpUnit.jobTitle}</h4>
                {workExpUnit.workFrom && workExpUnit.workTo ? <h6 className="text-align-right">{workExpUnit.workFrom} - {workExpUnit.workTo}</h6> : <></>}
            </WorkExpUnitHeaderWrapper>
            <WorkExpUnitSubWrapper>
                <div className="text-align-left">{workExpUnit.orgName}</div>
                <div className="text-align-right">{workExpUnit.orgPlace}</div>
            </WorkExpUnitSubWrapper>
            <WorkExpUnitDescWrapper>
                    {workExpUnit.achievements.split('. ').map((sentence) => {
                        return <div key={uniqid()} className="f-size-80">{sentence}</div>
                    })}
            </WorkExpUnitDescWrapper>

        </WorkExpUnitWrapper>
    )
}

export default WorkExp;