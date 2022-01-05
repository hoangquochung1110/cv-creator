import styled from "styled-components";

const WorkExpWrapper = styled.div`
`

const WorkExpUnitWrapper = styled.div`
    display: grid;
    grid-template-rows: 2rem 1rem 1rem;
    row-gap: .3rem;
`

const WorkExpUnitHeaderWrapper = styled.div`
    display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const WorkExpUnitSubWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const WorkExpUnitDescWrapper = styled.div`
    display: block;
`;

export { 
    WorkExpWrapper, 
    WorkExpUnitWrapper, 
    WorkExpUnitHeaderWrapper, 
    WorkExpUnitSubWrapper, 
    WorkExpUnitDescWrapper 
}