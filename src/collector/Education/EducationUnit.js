import {TextInput, DescriptionInput} from '../../components/Inputs';
import { AddBtn, RemoveBtn } from '../../components/Buttons';
import { GridColOneOne, GridRowTwoOneOne } from '../../styles/Grid';
import DurationWrapper from '../../styles/DurationWrapper';
import { EducationUnitWrapper } from './styles';

const EducationUnit = ({
    id,
    educationUnit,
    isDefaultUnit, 
    onAddEducation, 
    onDeleteEducation,
    onChangeEducation
}) => {
    return (
        <EducationUnitWrapper>
                <GridColOneOne>
                    <TextInput placeholder={educationUnit.studyProgram} id={id} name="studyProgram" onChange={onChangeEducation} />
                    <DurationWrapper>
                        <TextInput placeholder={educationUnit.eduFrom} id={id} name="eduFrom" onChange={onChangeEducation} aligned='right'/>
                        <TextInput placeholder={educationUnit.eduTo} id={id} name="eduTo" onChange={onChangeEducation} aligned='right'/>  
                    </DurationWrapper>
                </GridColOneOne>
                <GridColOneOne>
                        <TextInput placeholder={educationUnit.eduName} id={id} name="eduName" onChange={onChangeEducation}/>
                        <TextInput placeholder={educationUnit.eduPlace} id={id} name="eduPlace" onChange={onChangeEducation} aligned='right'/>
                </GridColOneOne>
                <DescriptionInput placeholder="Courses taken" id={id} name="description" onChange={onChangeEducation} />    

            {isDefaultUnit ? <AddBtn addHandler={onAddEducation}/> :  <RemoveBtn removeHandler={() => onDeleteEducation(id)}/> }

        </EducationUnitWrapper>
    )
}

export default EducationUnit;