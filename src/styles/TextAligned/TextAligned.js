import styled from "styled-components";

const TextAligned = styled.div`
    text-align: ${props => props.aligned || 'left' } ;
    font-weight: ${props => props.weight || '500'};
    margin-top: .5rem;
    margin-bottom: .5rem;
`
export default TextAligned;