interface IScaleBounds {
    upper: number
    lower: number
}

const between = (bounds: IScaleBounds): number[] => {
    const { lower, upper } = bounds

    const value = []

    for (let i = lower; i <= upper; i++) {
        value.push(i)
    }

    return value.reverse()
}

export default IScaleBounds
export { between }
