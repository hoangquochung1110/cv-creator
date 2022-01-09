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

const FontSelectorWrapper = styled.div`
    width: 100px;
    height: 0px; 
    font-size: .8rem;
`;



export {Input, TextArea, FontSelectorWrapper};