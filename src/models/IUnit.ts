interface IUnit {
    value: number
    suffix: string
}

const toString = (unit: IUnit, fixed = 2) => {
    const { value, suffix } = unit
    return `${value.toFixed(fixed)}${suffix}`
}

const toPX = (unit: IUnit, root: IUnit) => {
    return {
        value: unit.value * root.value,
        suffix: 'px',
    }
}

const equals = (a: IUnit, b: IUnit): boolean => {
    return a.value === b.value && a.suffix === b.suffix
}

export default IUnit
export { toString, toPX, equals }
