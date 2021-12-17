import { TextInput, TextArea } from "../Inputs/Inputs"
import { AddBtn, RemoveBtn } from "../Buttons/Buttons"

const EducationUnit = ({
    id, 
    isDefaultUnit, 
    onAddEducation, 
    onDeleteEducation,
    onChangeEducation
}) => {
    return (
        <div className="education-unit-wrapper">
            <TextInput placeholder="Study program" id={id} name="studyProgram" onChange={onChangeEducation} />
            <TextInput placeholder="Name of educational institute" id={id} name="eduName" onChange={onChangeEducation}/>
            <TextInput placeholder="Place of educational institute" id={id} name="eduPlace" onChange={onChangeEducation}/>
            <TextInput placeholder="From" id={id} name="eduFrom" onChange={onChangeEducation}/>
            <TextInput placeholder="To" id={id} name="eduTo" onChange={onChangeEducation}/>  
            <TextArea placeholder="Courses taken" id={id} name="description" onChange={onChangeEducation} />    
            {isDefaultUnit ? <AddBtn addHandler={onAddEducation}/> :  <RemoveBtn removeHandler={() => onDeleteEducation(id)}/> }

        </div>
    )
}

export default EducationUnit