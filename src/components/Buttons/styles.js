import styled from "styled-components";
 
const FixedButton = styled.button`
    position: fixed;
    right: 1%;
    top: 20%;
    background-color: var(--baby-blue);
    outline: none;
    border: none;
    min-width: 100px;
`

const CircleButton = styled.div`
    background-color: #6B5E8A;
    border-radius: 50%;
    width: 20px;
    height: 20px;
`
const ToggleButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-bottom: 2%;

`
export { FixedButton, CircleButton, ToggleButtonWrapper }
