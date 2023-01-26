import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import { scalesAtomFamily } from '../../recoil/store'

import IScale from '../../models/IScale'
import IUnit from '../../models/IUnit'

import Aside from '../elements/Aside'
import FieldNumber from '../elements/FieldNumber'
import FieldSelect from '../elements/FieldSelect'
import FieldUnit from '../elements/FieldUnit'
import Text from '../primitives/Text'
import Back from '../elements/Back'

interface IScaleAsideProps {
    variant: string
}

const ScaleAsideTitle = styled(Text)`
    h1& {
        margin-top: 16px;
    }
`

const ScaleAside = ({ variant }: IScaleAsideProps) => {
    const [scale, setScale] = useRecoilState<IScale>(scalesAtomFamily(variant))
    const [ratio, setRatio] = useState<number | string>(
        [1.067, 1.125, 1.2, 1.25, 1.333, 1.414, 1.5, 1.618].includes(scale.ratio)
            ? scale.ratio
            : 'custom',
    )

    const onChangeBase = (unit: IUnit): void => {
        setScale({ ...scale, base: unit })
    }

    const onChangeRatio = (event: ChangeEvent<HTMLSelectElement>): void => {
        const { value } = event.target
        setRatio(value)

        if (value !== 'custom') {
            setScale({ ...scale, ratio: Number(value) })
        }
    }

    const onChangeCustomRatio = (event: ChangeEvent<HTMLInputElement>): void => {
        setScale({ ...scale, ratio: Number(event.target.value) })
    }

    return (
        <Aside>
            <Back />
            <ScaleAsideTitle as={'h1'}>{`${variant} Scale`}</ScaleAsideTitle>
            <FieldUnit
                label={'Base'}
                value={scale.base}
                id={'scale-base'}
                onChange={onChangeBase}
                min={0}
                step={scale.base.suffix === 'px' ? 1 : 0.01}
            />
            <FieldSelect label={'Ratio'} value={ratio} onChange={onChangeRatio} id={'scale-ratio'}>
                <option value={1.067}>1.067 - Minor Second</option>
                <option value={1.125}>1.125 - Major Second</option>
                <option value={1.2}>1.200 - Minor Third</option>
                <option value={1.25}>1.250 - Major Third</option>
                <option value={1.333}>1.333 - Perfect Fourth</option>
                <option value={1.414}>1.414 - Augmented Fourth</option>
                <option value={1.5}>1.500 - Perfect Fifth</option>
                <option value={1.618}>1.618 - Golden Ratio</option>
                <option value={'custom'}>Custom</option>
            </FieldSelect>

            {ratio === 'custom' ? (
                <FieldNumber
                    label={'Custom Ratio'}
                    value={scale.ratio}
                    min={0.001}
                    step={0.001}
                    onChange={onChangeCustomRatio}
                    id={'scale-custom-ratio'}
                />
            ) : (
                <></>
            )}
        </Aside>
    )
}

export type { IScaleAsideProps }
export default ScaleAside
export { ScaleAsideTitle }
