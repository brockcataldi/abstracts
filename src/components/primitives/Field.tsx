import React, { FunctionComponent, ReactElement } from 'react'
import styled from 'styled-components'

import Descriptor, { IDescriptorProps } from './Descriptor'

interface IFieldProps extends IDescriptorProps {
    id: string
    children: ReactElement | ReactElement[]
    className?: string
}

interface IFieldLabelProps {
    reader?: boolean
}

const FieldWrapper = styled.div`
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`

const FieldLabel = styled.label<IFieldLabelProps>`
    display: block;
    font-size: 16px;
    ${(props) => {
        const { reader } = props

        if (reader !== true) {
            return `margin-bottom: 8px;`
        } else {
            return `height: 1px`
        }
    }}
`

const FieldInput = styled.div``

const Field: FunctionComponent<IFieldProps> = ({
    id,
    children,
    label,
    reader,
    icon,
    className,
}: IFieldProps) => {
    return (
        <FieldWrapper className={className}>
            <FieldLabel htmlFor={id} reader={reader}>
                <Descriptor icon={icon} label={label} reader={reader} />
            </FieldLabel>
            <FieldInput>{children}</FieldInput>
        </FieldWrapper>
    )
}

export type { IFieldProps }
export default Field
export { FieldWrapper, FieldLabel, FieldInput }
