import styled from 'styled-components'

const Range = styled.input.attrs({ type: 'range' })`
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    background: white;
    border: 2px solid black;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: white;
        border: 2px solid black;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: white;
        border: 2px solid black;
        cursor: pointer;
    }
`

export default Range
