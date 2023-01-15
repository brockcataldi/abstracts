import { atom, atomFamily } from 'recoil'
import IScale from '../models/IScale'
import IScaleBounds from '../models/IScaleBounds'

export const projectNameAtom = atom<string>({
    key: 'projectNameAtom',
    default: 'New Project',
})

export const scalesAtomFamily = atomFamily<IScale, string>({
    key: 'scales',
    default: {
        base: { value: 16, suffix: 'px' },
        ratio: 1.2,
    },
})

export const scalesBoundsAtomFamily = atomFamily<IScaleBounds, string>({
    key: 'scalesBounds',
    default: {
        upper: 8,
        lower: -1
    }
});