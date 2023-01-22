import React, { FunctionComponent, ReactElement } from 'react'

import styled from 'styled-components'

interface IAsideProps {
    children: ReactElement | ReactElement[] | null
}

const AsideWrapper = styled.aside`
    width: 300px;
    border-right: 1px solid black;
    height: 100vh;
    padding: 32px;
    box-sizing: border-box;
    position: fixed;
`

const Aside: FunctionComponent<IAsideProps> = ({ children }: IAsideProps) => {
    return <AsideWrapper>{children}</AsideWrapper>
}

export type { IAsideProps }
export default Aside
export { AsideWrapper }
