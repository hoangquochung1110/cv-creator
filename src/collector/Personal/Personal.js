import { TextInput, TelInput, EmailInput } from '../../components/Inputs';
import { PersonalInfoStyle, PersonalContactStyle, PersonalWrapper } from "./styles";


const Personal = ({
    personal,
    onChangePersonal
}) => {
    return(
        <PersonalWrapper>
            <PersonalInfoStyle>
                <TextInput placeholder={personal.fname} id="fname" name="fname" onChange={onChangePersonal}/>
            </PersonalInfoStyle>
            <PersonalContactStyle>
                <TextInput placeholder={personal.address} id="address" name="address" onChange={onChangePersonal} width='199px'/>
                <EmailInput placeholder={personal.email} id="email" name="email" onChange={onChangePersonal}/>
                <TextInput placeholder={personal.github} id="github" name="github" onChange={onChangePersonal}/>
                <TelInput placeholder="84-912-345-678" pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{3}" id="telephone" name="telephone" onChange={onChangePersonal}/>
            </PersonalContactStyle>

        </PersonalWrapper>
    )
}

export default Personal;