import styled from "styled-components";

const OuterToolkitWrapper = styled.div`
        padding-top: 2rem;
        padding-bottom: 2rem;
`

const InnerToolkitWrapper = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        column-gap: .2rem;

        margin-left: 30%;
        margin-right: 30%;
        padding-top: .2rem;
        padding-bottom: .2rem;
        min-height: 1.5rem;
        
        border: 1px groove var(--dark-blue);
        border-radius: 15px;
        background-color: var(--midnight-blue);
`

export { OuterToolkitWrapper, InnerToolkitWrapper };