import React from 'react'
import styled from 'styled-components'

import { useRecoilState, useRecoilValue } from 'recoil'
import {
    scalesAtomFamily,
    scaleBoundsAtomFamily,
    scaleSelectionsAtomFamily,
    scaleMidpointsAtomFamily,
    projectLabelTypeAtom,
    projectRootSizeAtom,
} from '../../recoil/store'

import { calculate, tag } from '../../models/IScale'
import { between } from '../../models/IScaleBounds'
import { toPX } from '../../models/IUnit'

import Button from '../elements/Button'
import ScaleEntry from './ScaleEntry'
import { Plus } from '../../assets/icons'

interface IScaleContentProps {
    variant: string
}

const ScaleContentWrapper = styled.article`
    padding: 32px;
    width: calc(100% - 300px);
    height: 100%;
    box-sizing: border-box;
    margin-left: 300px;
`

const ScaleContent = ({ variant }: IScaleContentProps) => {
    const projectLabelType = useRecoilValue(projectLabelTypeAtom)
    const scale = useRecoilValue(scalesAtomFamily(variant))
    const rootSize = useRecoilValue(projectRootSizeAtom)

    const [scaleBounds, setScaleBounds] = useRecoilState(scaleBoundsAtomFamily(variant))
    const [scaleMidpoint, setScaleMidpoint] = useRecoilState(scaleMidpointsAtomFamily(variant))
    const [scaleSelections, setScaleSelections] = useRecoilState(scaleSelectionsAtomFamily(variant))

    const onClickUpperBound = (): void => {
        const { upper } = scaleBounds
        setScaleBounds({ ...scaleBounds, upper: upper + 1 })
    }

    const onClickLowerBound = (): void => {
        const { lower } = scaleBounds
        setScaleBounds({ ...scaleBounds, lower: lower - 1 })
    }

    const onChangeSelection = (nth: number, checked: boolean): void => {
        if (checked === true) {
            setScaleSelections([...scaleSelections, nth])
        } else {
            setScaleSelections(scaleSelections.filter((value) => value !== nth))
        }
    }

    const onChangeMidpoint = (nth: number) => {
        setScaleMidpoint(nth)
    }

    return (
        <ScaleContentWrapper>
            <Button
                icon={Plus}
                label={'Add an Upper Bounds'}
                reader={true}
                onClick={onClickUpperBound}
            />
            {between(scaleBounds).map((value: number, index: number) => {
                const label = tag(value, scaleSelections, scaleMidpoint, projectLabelType)
                const size = calculate(value, scale)

                return (
                    <ScaleEntry
                        key={index}
                        nth={value}
                        type={variant}
                        index={index}
                        label={label}
                        value={size}
                        absoluteValue={
                            scale.base.suffix === 'px'
                                ? undefined
                                : toPX(size, { value: rootSize, suffix: 'px' })
                        }
                        checked={scaleSelections.includes(value)}
                        midpoint={value === scaleMidpoint}
                        onChange={onChangeSelection}
                        onChangeMidpoint={onChangeMidpoint}
                    />
                )
            })}
            <Button
                icon={Plus}
                label={'Add an Lower Bounds'}
                reader={true}
                onClick={onClickLowerBound}
            />
        </ScaleContentWrapper>
    )
}

export type { IScaleContentProps }
export default ScaleContent
export { ScaleContentWrapper }
