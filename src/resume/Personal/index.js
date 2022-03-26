import {
    PersonalContactStyle,
    PersonalInfoStyle,
    PersonalWrapper,
} from "./Styles";

const Personal = ({ personal }) => {
    return (
        <PersonalWrapper>
            <PersonalInfoStyle>
                <div contentEditable="true">
                    {personal.lname} {personal.fname}
                </div>
            </PersonalInfoStyle>

            <PersonalContactStyle>
                <div contentEditable="true">
                    {personal.address} | {personal.email} | {personal.github} |{" "}
                    {personal.telephone}
                </div>
            </PersonalContactStyle>
        </PersonalWrapper>
    );
};

export default Personal;
