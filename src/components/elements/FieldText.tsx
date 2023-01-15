import React, { ChangeEvent, FunctionComponent } from 'react'

import Field from '../primitives/Field'
import Input from '../primitives/Input'

interface IFieldTextProps {
    id: string
    label: string
    value: string | number
    reader: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const FieldText: FunctionComponent<IFieldTextProps> = ({
    label,
    id,
    value,
    reader,
    onChange,
}: IFieldTextProps) => {
    return (
        <Field label={label} id={id} reader={reader}>
            <Input type={'text'} value={value} onChange={onChange} id={id} name={id} />
        </Field>
    )
}

export default FieldText
