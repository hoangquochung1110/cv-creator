import uniqid from 'uniqid';
import TextAligned from '../../../styles/TextAligned';
import { WorkExpUnitDescWrapper, WorkExpUnitHeaderWrapper, WorkExpUnitSubWrapper, WorkExpWrapper, WorkExpUnitWrapper } from './Styles';

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
                <TextAligned weight="700" contentEditable="true">{workExpUnit.jobTitle}</TextAligned>
                {workExpUnit.workFrom && workExpUnit.workTo ? <TextAligned aligned="right" contentEditable="true">{workExpUnit.workFrom} - {workExpUnit.workTo}</TextAligned> : <></>}
            </WorkExpUnitHeaderWrapper>
            <WorkExpUnitSubWrapper>
                <TextAligned contentEditable="true">{workExpUnit.orgName}</TextAligned>
                <TextAligned aligned="right" contentEditable="true">{workExpUnit.orgPlace}</TextAligned>
            </WorkExpUnitSubWrapper>
            <WorkExpUnitDescWrapper>
                    {workExpUnit.achievements.split('. ').map((sentence) => {
                        return <div key={uniqid()} className="f-size-80" contentEditable="true">{sentence}</div>
                    })}
            </WorkExpUnitDescWrapper>

        </WorkExpUnitWrapper>
    )
}

export default WorkExp;