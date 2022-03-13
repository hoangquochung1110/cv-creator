import styled from "styled-components";

const ResumeWrapper = styled.div`
    background-color: white;
    padding: 5%;
    box-shadow:
    12.5px 12.5px 10px rgba(0, 0, 0, 0.043),
    100px 100px 80px rgba(0, 0, 0, 0.07);
    font-family: ${props => props.font || 'Ubuntu'};
`;

export default ResumeWrapper;