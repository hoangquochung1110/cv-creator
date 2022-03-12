import { PersonalContactStyle, PersonalInfoStyle, PersonalWrapper } from "./styles";

const Personal = ({personal}) => {
    return(
        <PersonalWrapper>
            <PersonalInfoStyle>
                <div>{personal.lname} {personal.fname}</div>
            </PersonalInfoStyle>
                
            <PersonalContactStyle>
                <div>
                    {personal.address} | {personal.email} | {personal.github} | {personal.telephone}
                </div>
            </PersonalContactStyle>
        </PersonalWrapper>
    )
}


export default Personal;