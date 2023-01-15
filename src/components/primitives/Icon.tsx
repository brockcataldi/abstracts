import React, { FunctionComponent, SVGProps } from 'react'
import styled from 'styled-components'

interface IIconProps extends IIconWrapperProps {
    icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>
}

interface IIconWrapperProps {
    size?: 'small' | 'large'
}

const IconWrapper = styled.div<IIconWrapperProps>`
    ${(props) => {
        const { size } = props

        if (size === 'large') {
            return `
                width: 32px;
                height: 32px;
            `
        }

        return `
            width: 24px;
            height: 24px;
        `
    }}

    & svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        color: black;
    }
`

const Icon = ({ icon, size = 'small' }: IIconProps) => {
    const Display = icon
    return (
        <IconWrapper size={size}>
            <Display />
        </IconWrapper>
    )
}

export type { IIconProps, IIconWrapperProps }
export default Icon
export { IconWrapper }
