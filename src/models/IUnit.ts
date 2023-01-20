interface IUnit {
    value: number
    suffix: string
}

const toString = (unit: IUnit, fixed = 2) => {
    const { value, suffix } = unit
    return `${value.toFixed(fixed)}${suffix}`
}

export default IUnit
export { toString }
