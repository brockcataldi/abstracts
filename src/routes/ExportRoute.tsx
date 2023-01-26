import React from 'react'
import styled from 'styled-components'
import Back from '../components/elements/Back'
import Text from '../components/primitives/Text'

import { gather } from '../models/IProject'

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
`

const Header = styled.header`
    padding: 1rem 0;
    width: 100%;
    box-sizing: border-box;
`

const Content = styled.div`
    max-width: 666px;
    margin: 0 auto;
`

const Code = styled.pre`
    width: 666px;
    padding: 16px;
    display: block;
    border: 2px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-size: 12px;
    line-height: 1.5;
`

const ExportRoute = () => {
    return (
        <Wrapper>
            <Content>
                <Header>
                    <Back />

                    <Text as={'h1'}>Export</Text>
                </Header>
                <Code>{JSON.stringify(gather(), null, 4)}</Code>
            </Content>
        </Wrapper>
    )
}

export default ExportRoute
