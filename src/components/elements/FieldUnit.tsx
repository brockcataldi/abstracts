import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

import IUnit from '../../models/IUnit'

import Field, { FieldWrapper, FieldInput } from '../primitives/Field'
import FieldNumber from './FieldNumber'
import FieldSelect from './FieldSelect'
import Input from '../primitives/Input'
import Select from '../primitives/Select'

interface IFieldUnit {
    label: string
    id: string
    value: IUnit
    onChange: (value: IUnit) => void
}

const FieldUnitField = styled(Field)`
    & > ${FieldInput}{
        display: grid;
        grid-template-columns: 1fr 96px;
    }

    & ${FieldWrapper} {
        margin: 0;
    }

    & ${Input}{
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    & ${Select}{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: none;
    }
`;

const FieldUnit = ({ label, id, value, onChange }: IFieldUnit) => {

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, value: Number(event.target.value) })
    }

    const onChangeSuffix = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange({ ...value, suffix: event.target.value })
    }

    return (
        <FieldUnitField label={label} id={id}>

            <FieldNumber
                label={`${label} Value`}
                value={value.value}
                id={`${id}-unit-value`}
                reader={true}
                onChange={onChangeValue}
            />
            <FieldSelect
                label={`${label} Suffix`}
                value={value.suffix}
                id={`${id}-unit-suffix`}
                reader={true}
                onChange={onChangeSuffix}
            >
                <option value={'px'}>px</option>
                <option value={'rem'}>rem</option>
                <option value={'em'}>em</option>
            </FieldSelect>

        </FieldUnitField>
    )
}

export default FieldUnit
