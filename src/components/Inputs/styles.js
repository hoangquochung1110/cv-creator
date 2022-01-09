import styled from "styled-components";

const Input = styled.input`
    border: none;
    outline: none;
    background: inherit;
    text-align: ${props => props.aligned || 'left'};
`
const TextArea = styled.textarea`
    border: none;
    outline: none;
    background: inherit;
`



export {Input, TextArea};