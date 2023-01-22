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

export const projectPreferredUnitAtom = atom<string>({
    key: 'projectPreferredUnit',
    default: 'px',
})

export const projectRootSizeAtom = atom<number>({
    key: 'projectRootSize',
    default: 16,
})

export const scaleAtomDefault: IScale = {
    base: { value: 16, suffix: 'px' },
    ratio: 1.2,
}

export const scalesAtomFamily = atomFamily<IScale, string>({
    key: 'scales',
    default: scaleAtomDefault,
})

export const scaleBoundsAtomDefault: IScaleBounds = {
    upper: 8,
    lower: -1,
}

export const scaleBoundsAtomFamily = atomFamily<IScaleBounds, string>({
    key: 'scaleBounds',
    default: scaleBoundsAtomDefault,
})

export const scaleSelectionsAtomDefault: number[] = [0]

export const scaleSelectionsAtomFamily = atomFamily<number[], string>({
    key: 'scaleSelections',
    default: scaleSelectionsAtomDefault,
})

export const scaleMidpointAtomDefault = 0

export const scaleMidpointsAtomFamily = atomFamily<number, string>({
    key: 'scaleMidpoints',
    default: scaleMidpointAtomDefault,
})
