import { useRecoilValue } from 'recoil'

import {
    projectNameAtom,
    projectLabelTypeAtom,
    projectRootSizeAtom,
    projectPreferredUnitAtom,
    scalesAtomFamily,
    scaleMidpointsAtomFamily,
    scaleSelectionsAtomFamily,
} from '../recoil/store'

import IScale from './IScale'
import IUnit from './IUnit'

import slugify from '../utilities/slugify'

interface IProjectSettings {
    name: string
    label: string
    unit: string
    root: IUnit
}

interface IProjectScaleSettings {
    scale: IScale
    midpoint: number
    selections: number[]
}

interface IProject {
    project: IProjectSettings
    scales: {
        space: IProjectScaleSettings
        type: IProjectScaleSettings
    }
}

const gatherProjectSettings = (): IProjectSettings => {
    const rootValue = useRecoilValue(projectRootSizeAtom)
    const nameValue = useRecoilValue(projectNameAtom)
    const label = useRecoilValue(projectLabelTypeAtom)
    const unit = useRecoilValue(projectPreferredUnitAtom)

    const name = slugify(nameValue)
    const root = { value: rootValue, suffix: 'px' }

    return {
        name,
        label,
        unit,
        root,
    }
}

const gatherScaleSettings = (variant: string): IProjectScaleSettings => {
    const scale = useRecoilValue(scalesAtomFamily(variant))
    const midpoint = useRecoilValue(scaleMidpointsAtomFamily(variant))
    const selections = useRecoilValue(scaleSelectionsAtomFamily(variant))

    return {
        scale,
        midpoint,
        selections,
    }
}

const gather = (): IProject => {
    return {
        project: gatherProjectSettings(),
        scales: {
            space: gatherScaleSettings('space'),
            type: gatherScaleSettings('type'),
        },
    }
}

export default IProject
export { gather }
