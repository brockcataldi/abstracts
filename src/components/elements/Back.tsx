import React from 'react'
import styled from 'styled-components'

import ButtonLink from '../elements/ButtonLink'

import { ArrowLeft } from '../../assets/icons'

const BackButtonLink = styled(ButtonLink)`
    border: none;
    margin-bottom: 32px;
`
const Back = () => {
    return <BackButtonLink to={'/dashboard'} label={'Back to the Dashboard'} icon={ArrowLeft} />
}

export default Back
