import React, { ChangeEvent, FunctionComponent } from 'react'

import Field, { IFieldProps } from '../primitives/Field'
import Select from '../primitives/Select'

interface IFieldSelectProps extends IFieldProps {
    value: string | number
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const FieldSelect: FunctionComponent<IFieldSelectProps> = ({
    label,
    id,
    reader,
    children,
    value,
    onChange,
}: IFieldSelectProps) => {
    return (
        <Field label={label} id={id} reader={reader}>
            <Select id={id} name={id} value={value} onChange={onChange}>
                {children}
            </Select>
        </Field>
    )
}

export default FieldSelect
