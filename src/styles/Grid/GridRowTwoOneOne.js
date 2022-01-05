import styled from "styled-components";

const GridRowTwoOneOne = styled.div`
    display: grid;
    grid-template-rows: 2rem 1rem 1rem;
    grid-row-gap: 0.3rem;
    row-gap: 0.3rem;
`
const GridColOneOne = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export {GridRowTwoOneOne, GridColOneOne};