import { PersonalContactStyle, PersonalInfoStyle } from "../../../style/PersonalStyle";

const Personal = ({personal}) => {
    return(
        <div className="resume-personal">
            <PersonalInfoStyle>
                <h2>{personal.lname} {personal.fname}</h2>
            </PersonalInfoStyle>
                
            <PersonalContactStyle>
                <h6>
                    {personal.address} | {personal.email} | {personal.github} | {personal.telephone}
                </h6>
            </PersonalContactStyle>
        </div>
    )
}


export default Personal;