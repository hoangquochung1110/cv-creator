import uniqid from 'uniqid';
import TextAligned from '../../../styles/TextAligned';
import { WorkExpUnitDescWrapper, WorkExpUnitHeaderWrapper, WorkExpUnitSubWrapper, WorkExpWrapper, WorkExpUnitWrapper } from './Styles';

const WorkExp = ({workExp, setSection}) => {
    return (
        <WorkExpWrapper
            className='work-exp-section'
            onClick={(e) => {
                const sectionID = e.target.closest(".work-exp-unit").id;
                setSection(e, "workExperience", sectionID);
            }}
        >
            { workExp.map((workExpUnit) => {
                return (
                    <WorkExpUnit id={workExpUnit.id} key={workExpUnit.id} workExpUnit={workExpUnit} />
                )
            })}
        </WorkExpWrapper>
    )
}

const WorkExpUnit = ({workExpUnit, id}) => {
    return (
        <WorkExpUnitWrapper id={id} className="work-exp-unit">
            <WorkExpUnitHeaderWrapper>
                <div contentEditable="true">{workExpUnit.jobTitle}</div>
                {workExpUnit.workFrom && workExpUnit.workTo ? 
                    <div contentEditable="true">{workExpUnit.workFrom} - {workExpUnit.workTo}</div> 
                : 
                    <></>
                }
            </WorkExpUnitHeaderWrapper>
            <WorkExpUnitSubWrapper>
                <div contentEditable="true">{workExpUnit.orgName}</div>
                <div contentEditable="true">{workExpUnit.orgPlace}</div>
            </WorkExpUnitSubWrapper>
            <WorkExpUnitDescWrapper contentEditable="true">
                    {workExpUnit.achievements.split('. ').map((sentence) => {
                        return <div key={uniqid()}>{sentence}</div>
                    })}
            </WorkExpUnitDescWrapper>

        </WorkExpUnitWrapper>
    )
}

export default WorkExp;