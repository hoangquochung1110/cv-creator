import styled from "styled-components";

const WorkExpWrapper = styled.div`
`;

const WorkExpUnitWrapper = styled.div`
    display: grid;
    grid-template-rows: 1.5rem 1.5rem auto-fit;
    row-gap: .3rem;
    padding-bottom: .5rem;
`

const WorkExpUnitHeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & div:first-child{
        font-weight: 700;
    }
    & div:nth-child(2){    
        text-align: right;
    };
`;

const WorkExpUnitSubWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & div:nth-child(2){    
        text-align: right;
    };
`;

const WorkExpUnitDescWrapper = styled.div`
    display: block;
    font-size: .8rem;
`;

export { 
    WorkExpWrapper, 
    WorkExpUnitWrapper, 
    WorkExpUnitHeaderWrapper, 
    WorkExpUnitSubWrapper, 
    WorkExpUnitDescWrapper 
}