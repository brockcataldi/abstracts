import { atom, atomFamily } from 'recoil'
import IScale from '../models/IScale'
import IScaleBounds from '../models/IScaleBounds'

export const projectNameAtom = atom<string>({
    key: 'projectName',
    default: 'New Project',
})

export const projectLabelTypeAtom = atom<string>({
    key: 'projectLabelType',
    default: 'incremental',
})

export const scalesAtomFamily = atomFamily<IScale, string>({
    key: 'scales',
    default: {
        base: { value: 16, suffix: 'px' },
        ratio: 1.2,
    },
})

export const scaleBoundsAtomFamily = atomFamily<IScaleBounds, string>({
    key: 'scaleBounds',
    default: {
        upper: 8,
        lower: -1,
    },
})

export const scaleSelectionsAtomFamily = atomFamily<number[], string>({
    key: 'scaleSelections',
    default: [0],
})

export const scaleMidpointsAtomsFamily = atomFamily<number, string>({
    key: 'scaleMidpoints',
    default: 0,
})
