import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import Descriptor, { IDescriptorProps } from '../primitives/Descriptor'

interface IButtonProps extends IDescriptorProps {
    label: string
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const ButtonWrapper = styled.button`
    -webkit-appearance: none;
    appearance: none;
    text-decoration: none;
    padding: 0.25rem 1rem;
    border-radius: 0.25rem;
    display: inline-grid;
    place-items: center;
    background-color: white;
    cursor: pointer;
    border: 2px solid black;
`

const Button = ({ label, icon, onClick, reader }: IButtonProps) => {
    return (
        <ButtonWrapper onClick={onClick}>
            <Descriptor icon={icon} label={label} reader={reader} />
        </ButtonWrapper>
    )
}

export type { IButtonProps }
export default Button
export { ButtonWrapper }
