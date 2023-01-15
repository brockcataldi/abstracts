import IUnit from './IUnit'

interface IScale {
    base: IUnit
    ratio: number
}


const calculate = (nth: number, scale: IScale) => {
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
    return [a.toFixed(2), suffix]
}


export default IScale
export { calculate }
