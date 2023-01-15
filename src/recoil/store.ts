import { atom } from 'recoil'

const projectNameAtom = atom({
    key: 'projectNameAtom',
    default: 'New Project',
})

export { projectNameAtom }
