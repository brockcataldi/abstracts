import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import ScaleAside from '../components/patterns/ScaleAside'
import ScaleContent from '../components/patterns/ScaleContent'

const ScaleRouteWrapper = styled.div``

const ScaleRoute = () => {
    const { variant } = useParams<{ variant: string }>()
    const variantKey = variant === undefined ? 'type' : variant

    return (
        <ScaleRouteWrapper>
            <ScaleAside variant={variantKey} />
            <ScaleContent variant={variantKey} />
        </ScaleRouteWrapper>
    )
}

export default ScaleRoute
