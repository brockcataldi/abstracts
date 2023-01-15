import React, { ChangeEvent, FunctionComponent } from 'react'

import Field from '../primitives/Field'
import Input from '../primitives/Input'

interface IFieldNumberProps {
    id: string
    min?: number
    max?: number
    step?: number
    label: string
    value: number
    reader?: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const FieldNumber: FunctionComponent<IFieldNumberProps> = ({
    label,
    id,
    value,
    min,
    max,
    step,
    reader,
    onChange,
}: IFieldNumberProps) => {
    return (
        <Field label={label} id={id} reader={reader}>
            <Input
                type={'number'}
                value={value}
                onChange={onChange}
                id={id}
                name={id}
                min={min}
                max={max}
                step={step}
            />
        </Field>
    )
}

export default FieldNumber
