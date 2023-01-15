import React, { FunctionComponent, ReactElement } from 'react'
import styled from 'styled-components'

import Descriptor, { IDescriptorProps } from './Descriptor'

interface IFieldProps extends IDescriptorProps {
    id: string
    children: ReactElement | ReactElement[]
}

const FieldWrapper = styled.div``

const FieldLabel = styled.label`
    display: block;
`

const Field: FunctionComponent<IFieldProps> = ({
    id,
    children,
    label,
    reader,
    icon,
}: IFieldProps) => {
    return (
        <FieldWrapper>
            <FieldLabel htmlFor={id}>
                <Descriptor icon={icon} label={label} reader={reader} />
            </FieldLabel>
            {children}
        </FieldWrapper>
    )
}

export default Field
