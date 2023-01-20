import React, { KeyboardEvent } from 'react'
import styled from 'styled-components'

import IUnit, { toString } from '../../models/IUnit'
import Text from '../primitives/Text'

interface IScaleEntryProps {
    label: string
    nth: number
    type: string
    value: IUnit
    index: number
    checked: boolean
    midpoint: boolean
    onChange: (nth: number, value: boolean) => void
    onChangeMidpoint: (nth: number) => void
}

const ScaleEntryInput = styled.input`
    display: none;
`

const ScaleEntryLabel = styled.label`
    display: grid;
    grid-template-columns: 32px 64px 1fr;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    padding: 1rem;
`

const ScaleEntryDisplay = styled(Text)`
    margin: 0;
    line-height: 1;
    width: 100%;
    white-space: nowrap;
`
interface IScaleEntryMidpointWrapperProps {
    checked: boolean
}

const ScaleEntryMidpointLabel = styled(Text)`
    display: grid;
    place-items: center;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    cursor: pointer;
`

const ScaleEntryMidpointInput = styled.input`
    display: none;
`

const ScaleEntryMidpointWrapper = styled.div<IScaleEntryMidpointWrapperProps>`
    border-left: 2px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;

    ${(props) => {
        const { checked } = props

        if (checked === true) {
            return `
            background-color: black; 
            
            ${ScaleEntryMidpointLabel}{
                color: white;
            }
            `
        }

        return `
            background-color: white; 
            ${ScaleEntryMidpointLabel}{
                color: black;
            }
        `
    }}
`

interface IScaleEntryWrapperProps {
    checked: boolean
}

const ScaleEntryWrapper = styled.div<IScaleEntryWrapperProps>`
    margin: 1rem 0;
    border-radius: 0.5rem;
    display: grid;
    overflow: hidden;

    ${(props) => {
        const { checked } = props

        if (checked === true) {
            return `
                border: 2px solid black;
                grid-template-columns: 1fr 120px;

                ${ScaleEntryLabel}{
                    color: black;
                }

                ${ScaleEntryMidpointWrapper}{
                    border-left-color: black;
                    color: black;
                }

                .space {
                    background-color: black;
                }
            `
        }

        return `
            border: 2px solid rgba(0, 0, 0, 0.25);
            grid-template-columns: 1fr;
            
            ${ScaleEntryLabel}{
                color: rgba(0, 0, 0, 0.25);
            }

            ${ScaleEntryMidpointWrapper}{
                border-left-color: rgba(0, 0, 0, 0.25);
                color: rgba(0, 0, 0, 0.25);
            }

            .space {
                background-color: rgba(0, 0, 0, 0.25);
            }
        `
    }}
`

const ScaleEntry = ({
    label,
    nth,
    value,
    type,
    index,
    checked,
    midpoint,
    onChange,
    onChangeMidpoint,
}: IScaleEntryProps) => {
    const size = toString(value, 2)

    const onChangeInput = () => {
        onChange(nth, !checked)
    }

    const onKeyDownLabel = (event: KeyboardEvent<HTMLLabelElement>) => {
        if (event.key === 'Enter') {
            onChange(nth, !checked)
        }
    }

    const onChangeMidpointInput = () => {
        onChangeMidpoint(nth)
    }

    const onKeyDownMidpointLabel = (event: KeyboardEvent<HTMLLabelElement>) => {
        if (event.key === 'Enter') {
            onChangeMidpoint(nth)
        }
    }

    return (
        <ScaleEntryWrapper checked={checked}>
            <ScaleEntryInput
                type={'checkbox'}
                id={`scale-entry-${index}`}
                checked={checked}
                onChange={onChangeInput}
            />
            <ScaleEntryLabel
                htmlFor={`scale-entry-${index}`}
                tabIndex={0}
                onKeyDown={onKeyDownLabel}
            >
                <Text as={'span'}>{checked === true ? label : ''}</Text>
                <Text as={'span'}>{size}</Text>
                {type === 'type' ? (
                    <ScaleEntryDisplay className={'type'} style={{ fontSize: size }}>
                        Lorem Ispum Sit Dolor
                    </ScaleEntryDisplay>
                ) : (
                    <ScaleEntryDisplay
                        className={'space'}
                        style={{ height: size }}
                    ></ScaleEntryDisplay>
                )}
            </ScaleEntryLabel>
            {checked === true ? (
                <ScaleEntryMidpointWrapper checked={midpoint}>
                    <ScaleEntryMidpointInput
                        type={'radio'}
                        value={nth}
                        id={`scale-midpoint-${index}`}
                        name={`scale-midpoint`}
                        checked={midpoint}
                        onChange={onChangeMidpointInput}
                    />
                    <ScaleEntryMidpointLabel
                        as={'label'}
                        htmlFor={`scale-midpoint-${index}`}
                        onKeyDown={onKeyDownMidpointLabel}
                        tabIndex={0}
                    >
                        Midpoint
                    </ScaleEntryMidpointLabel>
                </ScaleEntryMidpointWrapper>
            ) : (
                <></>
            )}
        </ScaleEntryWrapper>
    )
}

export default ScaleEntry
