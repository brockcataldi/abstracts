import IUnit from './IUnit'

interface IScale {
    base: IUnit
    ratio: number
}

const calculate = (nth: number, scale: IScale): IUnit => {
    const {
        base: { value, suffix },
        ratio,
    } = scale

    let a = value

    if (nth < 0) {
        for (let i = 0; i > nth; i--) {
            a = a / ratio
        }
    } else {
        for (let i = 0; i < nth; i++) {
            a = a * ratio
        }
    }
    return {
        value: a,
        suffix,
    }
}

const TEE_VALUES: { [key: string]: string } = {
    '-2': 'XS',
    '-1': 'S',
    '0': 'M',
    '1': 'L',
    '2': 'XL',
}

const tee = (index: number): string => {
    if (index < -2) {
        return `${Math.abs(index) - 1}XS`
    }

    if (index > 2) {
        return `${Math.abs(index) - 1}XL`
    }

    const indexString = String(index)

    return Object.hasOwn(TEE_VALUES, indexString) ? TEE_VALUES[indexString] : 'M'
}

const getIndexFromSelections = (value: number, midpoint: number, selections: number[]) => {
    const valueIndex = selections.indexOf(value)
    const midpointIndex = selections.indexOf(midpoint)

    return valueIndex - midpointIndex
}

const tag = (value: number, selections: number[], midpoint: number, type: string): string => {
    const index = getIndexFromSelections(
        value,
        midpoint,
        [...selections].sort((a, b) => a - b),
    )

    switch (type) {
        case 'tee-shirt':
            return tee(index)

        case 'hundreds':
            return String((index * 100) + 400 );

        default:
            return String(index)
    }
}

export default IScale
export { calculate, tee, tag }
