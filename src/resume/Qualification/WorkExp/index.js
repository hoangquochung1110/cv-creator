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
                <TextAligned weight="700" contentEditable="true">{workExpUnit.jobTitle}</TextAligned>
                {workExpUnit.workFrom && workExpUnit.workTo ? <TextAligned aligned="right" contentEditable="true">{workExpUnit.workFrom} - {workExpUnit.workTo}</TextAligned> : <></>}
            </WorkExpUnitHeaderWrapper>
            <WorkExpUnitSubWrapper>
                <TextAligned contentEditable="true">{workExpUnit.orgName}</TextAligned>
                <TextAligned aligned="right" contentEditable="true">{workExpUnit.orgPlace}</TextAligned>
            </WorkExpUnitSubWrapper>
            <WorkExpUnitDescWrapper>
                    {workExpUnit.achievements.split('. ').map((sentence) => {
                        return <div key={uniqid()} contentEditable="true">{sentence}</div>
                    })}
            </WorkExpUnitDescWrapper>

        </WorkExpUnitWrapper>
    )
}

export default WorkExp;