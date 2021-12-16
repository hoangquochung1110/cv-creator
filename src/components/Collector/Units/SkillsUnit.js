import { TextInput } from "../Inputs/Inputs";
import { AddBtn, RemoveBtn } from "../Buttons/Buttons";

const SkillsUnit = ({
    id,
    isDefaultUnit,
    name,
    addUnit,
    deleteUnit,
    changeUnit
}) => {
    return (
        <div>
            <TextInput placeholder="Skills"  id={id} value={name} onChange={changeUnit}/>
            {isDefaultUnit ? <AddBtn addHandler={addUnit}/> :  <RemoveBtn removeHandler={() => deleteUnit(id)}/> }
        </div>

    )
}

export default SkillsUnit;
