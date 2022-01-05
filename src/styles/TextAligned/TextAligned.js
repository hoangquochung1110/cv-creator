import styled from "styled-components";

const TextAligned = styled.div`
    text-align: ${props => props.aligned || 'left' } ;
    margin-top: .5rem;
    margin-bottom: .5rem;
`
export default TextAligned;