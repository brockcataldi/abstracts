import { FunctionComponent, ReactElement } from "react";

import styled from "styled-components";

interface IAsideProps{
    children: ReactElement | ReactElement[];
}

const AsideWrapper = styled.aside`
    width: calc(300px - 4rem);
    border-right: 1px solid black;
    height: calc(100vh - 4rem);
    padding: 2rem;
`;

const Aside: FunctionComponent<IAsideProps> = ({children} : IAsideProps) => {
    return (<AsideWrapper>
        { children }
    </AsideWrapper>);
};

export type { IAsideProps };
export default Aside;
export { AsideWrapper };