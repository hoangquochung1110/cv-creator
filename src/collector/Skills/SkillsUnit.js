import {TextInput} from '../../components/Inputs';
import { AddBtn, RemoveBtn } from '../../components/Buttons';
import { SkillsUnitWrapper } from './style';

const SkillsUnit = ({
    id,
    isDefaultUnit,
    name,
    addUnit,
    deleteUnit,
    changeUnit
}) => {
    return (
        <SkillsUnitWrapper>
            <TextInput placeholder="Skills"  id={id} value={name} onChange={changeUnit}/>
            {isDefaultUnit ? <AddBtn addHandler={addUnit}/> :  <RemoveBtn removeHandler={() => deleteUnit(id)}/> }
        </SkillsUnitWrapper>

    )
}

export default SkillsUnit;
