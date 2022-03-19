import styled from "styled-components";

const EducationWrapper = styled.div`
`

const EducationUnitWrapper = styled.div`
    display: grid;
    grid-template-rows: 1.5rem 1.5rem 1.5rem;
    row-gap: .3rem;
    padding-bottom: .5rem;
`

const EducationUnitHeaderWrapper = styled.div`
    display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const EducationUnitSubWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const EducationUnitDescWrapper = styled.div`
    display: block;
    font-size: .8rem;
`;


export { 
    EducationWrapper, 
    EducationUnitWrapper, 
    EducationUnitHeaderWrapper, 
    EducationUnitSubWrapper, 
    EducationUnitDescWrapper,
}