import {TextInput, DescriptionInput} from '../../components/Inputs';
import { AddBtn, RemoveBtn } from '../../components/Buttons';
import { GridColOneOne } from '../../style/Grid';
import DurationWrapper from '../../style/DurationWrapper';
import { WorkExpUnitWrapper } from './styles';

const WorkExpUnit = ({
    id, workExpUnit, isDefaultUnit, onAddWorkExp, onDeleteWorkExp, onChangeWorkExp
}) => {
    return (
        <WorkExpUnitWrapper>
            <GridColOneOne>
                <TextInput placeholder={workExpUnit.jobTitle} id={id} name="jobTitle" onChange={onChangeWorkExp}/>
                <DurationWrapper>
                    <TextInput placeholder={workExpUnit.workFrom} id={id} name="workFrom" onChange={onChangeWorkExp} aligned='right'/>
                    <TextInput placeholder={workExpUnit.workTo} id={id} name="workTo" onChange={onChangeWorkExp} aligned='right'/>
                </DurationWrapper>
            </GridColOneOne>
            <GridColOneOne>
                <TextInput placeholder={workExpUnit.orgName} id={id} name="orgName" onChange={onChangeWorkExp}/>
                <TextInput placeholder={workExpUnit.orgPlace} id={id} name="orgPlace" onChange={onChangeWorkExp} aligned='right'/>
            </GridColOneOne>
            <DescriptionInput placeholder="Achievements" id={id} name="achievements" onChange={onChangeWorkExp}/>
            {isDefaultUnit ? <AddBtn addHandler={onAddWorkExp}/> :  <RemoveBtn removeHandler={() => onDeleteWorkExp(id)}/> }
        </WorkExpUnitWrapper>
    )
}

export default WorkExpUnit;