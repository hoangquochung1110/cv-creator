import { TextInput } from "../Inputs/Inputs"
import { AddBtn, RemoveBtn } from "../Buttons/Buttons"

const WorkExpUnit = ({
    id, isDefaultUnit, onAddWorkExp, onDeleteWorkExp, onChangeWorkExp
}) => {
    return (
        <div className="workexp-unit-wrapper">
                <TextInput placeholder="Job Title" id={id} name="jobTitle" onChange={onChangeWorkExp}/>
                <TextInput placeholder="Name of organization" id={id} name="orgName" onChange={onChangeWorkExp}/>
                <TextInput placeholder="Place of organization" id={id} name="orgName" onChange={onChangeWorkExp}/>
                <TextInput placeholder="From" id={id} name="workFrom" onChange={onChangeWorkExp}/>
                <TextInput placeholder="To" id={id} name="workTo" onChange={onChangeWorkExp}/>
                {isDefaultUnit ? <AddBtn addHandler={onAddWorkExp}/> :  <RemoveBtn removeHandler={() => onDeleteWorkExp(id)}/> }
        </div>
    )
}

export default WorkExpUnit