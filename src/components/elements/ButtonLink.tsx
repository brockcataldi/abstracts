import React from 'react'
import { Link as A } from 'react-router-dom'
import styled from 'styled-components'
import Descriptor, { IDescriptorProps } from '../primitives/Descriptor'

interface IButtonLinkProps extends IDescriptorProps {
    label: string
    to: string
    className?: string
}

const ButtonLinkWrapper = styled(A)`
    text-decoration: none;
    padding: 0.25rem 1rem;
    border-radius: 0.25rem;
    display: inline-grid;
    place-items: center;
    background-color: white;
    border: 2px solid black;
`

const ButtonLink = ({ to, label, icon, className }: IButtonLinkProps) => {
    return (
        <ButtonLinkWrapper className={className} to={to}>
            <Descriptor icon={icon} label={label} />
        </ButtonLinkWrapper>
    )
}

export type { IButtonLinkProps }
export default ButtonLink
export { ButtonLinkWrapper }
