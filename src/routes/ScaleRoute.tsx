import React, { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { useRecoilState } from 'recoil'
import { scalesAtomFamily, scalesBoundsAtomFamily } from '../recoil/store'

import IUnit from '../models/IUnit'
import { calculate } from '../models/IScale'
import { between } from '../models/IScaleBounds'


import Aside from '../components/patterns/Aside'
import ButtonLink from '../components/elements/ButtonLink'
import Text from '../components/primitives/Text'
import FieldSelect from '../components/elements/FieldSelect'
import FieldNumber from '../components/elements/FieldNumber'
import FieldUnit from '../components/elements/FieldUnit'

import { ArrowLeft } from '../assets/icons'


const ScaleRouteWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 1rem;
`

const ScaleRouteTitle = styled(Text)`
    h1& {
        margin-top: 1rem;
    }
`

const ScaleRouteContent = styled.article`
    padding: 2rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

const ScaleRoute = () => {
    const { variant } = useParams<{ variant: string }>()

    const atomFamilyKey = variant === undefined ? 'type' : variant;

    const [scale, setScale] = useRecoilState(scalesAtomFamily(atomFamilyKey))
    const [scaleBounds, setScaleBounds] = useRecoilState(scalesBoundsAtomFamily(atomFamilyKey))

    const [ratio, setRatio] = useState<number | string>(
        [1.067, 1.125, 1.2, 1.25, 1.333, 1.414, 1.5, 1.618].includes(scale.ratio)
            ? scale.ratio
            : 'custom',
    )

    const onChangeBase = (unit: IUnit) => {
        setScale({...scale, base: unit})
    }

    const onChangeRatio = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target
        setRatio(value)

        if (value !== 'custom') {
            setScale({ ...scale, ratio: Number(value) })
        }
    }

    const onChangeCustomRatio = (event: ChangeEvent<HTMLInputElement>) => {
        setScale({ ...scale, ratio: Number(event.target.value) })
    }

    return (
        <ScaleRouteWrapper>
            <Aside>
                <ButtonLink
                    to={'/dashboard'}
                    label={'Back to the Dashboard'}
                    outline={false}
                    icon={ArrowLeft}
                />
                <ScaleRouteTitle as={'h1'}>{`${variant} Scale`}</ScaleRouteTitle>
                <FieldUnit 
                    label={'Base'}
                    value={scale.base}
                    id={'scale-base'}
                    onChange={onChangeBase}
                />
                <FieldSelect
                    label={'Ratio'}
                    value={ratio}
                    onChange={onChangeRatio}
                    id={'scale-ratio'}
                >
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
                <pre>{JSON.stringify(scale, null, 4)}</pre>
            </Aside>
            <ScaleRouteContent>
                { 
                    between(scaleBounds).map((value, index) => {
                        return <p key={index}>{value} - {calculate(value, scale)}</p>
                    }) 
                }
            </ScaleRouteContent>
        </ScaleRouteWrapper>
    )
}

export default ScaleRoute
