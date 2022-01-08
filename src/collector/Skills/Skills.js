import { SkillsWrapper } from "./styles";
import {TextInput} from '../../components/Inputs';
import { AddBtn, RemoveBtn } from '../../components/Buttons';
import { SkillsUnitWrapper } from './styles';

const Skills = ({skills, onAddSkills, onDeleteSkills, onChangeSkills}) => {
    return (
        <SkillsWrapper>
            { skills.map((unit) => {
                    return (
                        <SkillsUnit 
                            key={unit.key} 
                            id={unit.id}
                            isDefaultUnit={unit.isDefaultUnit} 
                            name={unit.name}
                            changeUnit={onChangeSkills}
                            addUnit={onAddSkills}
                            deleteUnit={onDeleteSkills}

                        />
                    )
                })}
        </SkillsWrapper>
    )
}

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


export default Skills;
