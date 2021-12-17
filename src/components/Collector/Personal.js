import { TextInput, TelInput, EmailInput } from "./Inputs/Inputs";


const Personal = ({
    onChangePersonal
}) => {
    return(
        <div className="personal-wrapper">
            <TextInput placeholder="Last name" id="lname" name="lname" onChange={onChangePersonal}/>
            <TextInput placeholder="First name" id="fname" name="fname" onChange={onChangePersonal}/>
            <TextInput placeholder="City, Country" id="address" name="address" onChange={onChangePersonal}/>
            <EmailInput placeholder="Email address" id="email" name="email" onChange={onChangePersonal}/>
            <TextInput placeholder="Github" id="github" name="github" onChange={onChangePersonal}/>
            <TelInput placeholder="84-912-345-678" pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{3}" id="telephone" name="telephone" onChange={onChangePersonal}/>
        </div>
    )
}

export default Personal;