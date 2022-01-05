import uniqid from 'uniqid';
import { WorkExpUnitWrapper } from '../../../../collector/WorkExp/styles';
import TextAligned from '../../../../style/TextAligned';
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
                <TextAligned>{workExpUnit.jobTitle}</TextAligned>
                {workExpUnit.workFrom && workExpUnit.workTo ? <TextAligned aligned="right">{workExpUnit.workFrom} - {workExpUnit.workTo}</TextAligned> : <></>}
            </WorkExpUnitHeaderWrapper>
            <WorkExpUnitSubWrapper>
                <TextAligned>{workExpUnit.orgName}</TextAligned>
                <TextAligned aligned="right">{workExpUnit.orgPlace}</TextAligned>
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