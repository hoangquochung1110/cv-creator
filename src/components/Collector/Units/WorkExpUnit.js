import { TextInput } from "../Inputs/Inputs"
import { AddBtn, RemoveBtn } from "../Buttons/Buttons"

const WorkExpUnit = ({
    id, isDefaultUnit, onAddWorkExp, onDeleteWorkExp
}) => {
    return (
        <div className="workexp-unit-wrapper">
                <TextInput placeholder="Job Title" id={id} name="jobTitle"/>
                <TextInput placeholder="Name of organization" id={id} name="orgName"/>
                <TextInput placeholder="Place of organization" id={id} name="orgName"/>
                <TextInput placeholder="From" id={id} name="workFrom"/>
                <TextInput placeholder="To" id={id} name="workTo"/>
                {isDefaultUnit ? <AddBtn addHandler={onAddWorkExp}/> :  <RemoveBtn removeHandler={() => onDeleteWorkExp(id)}/> }
        </div>
    )
}

export default WorkExpUnit