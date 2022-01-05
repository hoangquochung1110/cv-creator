import styled from "styled-components";

const EducationWrapper = styled.div`
    padding-bottom: 2%;
`

const EducationUnitWrapper = styled.div`
    display: grid;
    grid-template-rows: 2rem 1rem 1rem;
    row-gap: .3rem;
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
`;

export { 
    EducationWrapper, 
    EducationUnitWrapper, 
    EducationUnitHeaderWrapper, 
    EducationUnitSubWrapper, 
    EducationUnitDescWrapper 
}