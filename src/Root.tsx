import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { useRecoilValue } from 'recoil'

import { projectRootSizeAtom } from './recoil/store'

import App from './App'

import DashboardRoute from './routes/DashboardRoute'
import IndexRoute from './routes/IndexRoute'
import InstallRoute from './routes/InstallRoute'
import ScaleRoute from './routes/ScaleRoute'
import ExportRoute from './routes/ExportRoute'

interface IGlobalStyleProps {
    rootSize: number
}

const GlobalStyles = createGlobalStyle<IGlobalStyleProps>`
  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    
    ${(props) => {
        return `font-size: ${props.rootSize}px`
    }}
  }

  body {
    margin: 0;
  }
`

const Wrapper = styled.div``

const Root = (): ReactElement => {
    const rootSize = useRecoilValue(projectRootSizeAtom)

    return (
        <Wrapper>
            <GlobalStyles rootSize={rootSize} />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route index element={<IndexRoute />} />
                        <Route path={'dashboard'} element={<DashboardRoute />} />
                        <Route path={'export'} element={<ExportRoute />} />
                        <Route path={'install'} element={<InstallRoute />} />
                        <Route path={'scale'}>
                            <Route path={':variant'} element={<ScaleRoute />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Wrapper>
    )
}

export default Root
