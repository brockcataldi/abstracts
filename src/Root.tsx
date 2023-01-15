import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'

import DashboardRoute from './routes/DashboardRoute'
import IndexRoute from './routes/IndexRoute'
import InstallRoute from './routes/InstallRoute'
import ScaleRoute from './routes/ScaleRoute'

const Root = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<IndexRoute />} />
                    <Route path={'dashboard'} element={<DashboardRoute />} />
                    <Route path={'install'} element={<InstallRoute />} />
                    <Route path={'scale'}>
                        <Route path={':variant'} element={<ScaleRoute />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Root