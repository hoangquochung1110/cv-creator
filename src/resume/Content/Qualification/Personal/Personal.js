import { PersonalContactStyle, PersonalInfoStyle, PersonalWrapper } from "./styles";

const Personal = ({personal}) => {
    return(
        <PersonalWrapper>
            <PersonalInfoStyle>
                <h2>{personal.lname} {personal.fname}</h2>
            </PersonalInfoStyle>
                
            <PersonalContactStyle>
                <h6>
                    {personal.address} | {personal.email} | {personal.github} | {personal.telephone}
                </h6>
            </PersonalContactStyle>
        </PersonalWrapper>
    )
}


export default Personal;