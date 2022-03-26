import styled from "styled-components";

const OuterToolkitWrapper = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

const InnerToolkitWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 1.5rem;
    width: fit-content;
    border: 1px groove var(--dark-blue);
    border-radius: 15px;
    background-color: var(--midnight-blue);
`;

export { OuterToolkitWrapper, InnerToolkitWrapper };
