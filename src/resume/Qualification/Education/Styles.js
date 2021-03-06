import styled from "styled-components";

const EducationWrapper = styled.div``;

const EducationUnitWrapper = styled.div`
    display: grid;
    grid-template-rows: 1.5rem 1.5rem auto-fit;
    row-gap: 0.3rem;
    padding-bottom: 0.5rem;
`;

const EducationUnitHeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & div:first-child {
        font-weight: 700;
    }
    & div:nth-child(2) {
        text-align: right;
    }
`;

const EducationUnitSubWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & div:nth-child(2) {
        text-align: right;
    }
`;

const EducationUnitDescWrapper = styled.div`
    display: block;
    font-size: 0.8rem;
`;

export {
    EducationWrapper,
    EducationUnitWrapper,
    EducationUnitHeaderWrapper,
    EducationUnitSubWrapper,
    EducationUnitDescWrapper,
};
