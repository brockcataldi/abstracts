import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

import { useRecoilState } from 'recoil'
import {
    projectLabelTypeAtom,
    projectNameAtom,
    projectPreferredUnitAtom,
    projectRootSizeAtom,
    scalesAtomFamily,
} from '../recoil/store'

import ButtonLink from '../components/elements/ButtonLink'
import Text from '../components/primitives/Text'
import FieldSelect from '../components/elements/FieldSelect'

import slugify from '../utilities/slugify'
import FieldNumber from '../components/elements/FieldNumber'
import IUnit from '../models/IUnit'

const Wrapper = styled.div``

const Content = styled.div`
    max-width: 666px;
    margin: 0 auto;
`

// const DashboardRouteTitle = styled(Text)`
//     font-size: 72px;
//     line-height: 1;
//     margin: 0;
// `

const FileName = styled(Text)`
    margin: 8px 0 0;
    line-height: 1;
`

const DashboardRouteInput = styled.input.attrs({ type: 'text' })`
    font-size: 72px;
    line-height: 1;
    font-weight: 800;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    -webkit-appearance: none;
    appearance: none;
    border: none;
    border-bottom: 2px dotted black;
    display: block;
    box-sizing: border-box;
    width: 100%;
`

const Header = styled.header`
    padding: 64px 0 32px 0;
`

const SettingsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
`

const DashboardRoute = () => {
    const [name, setName] = useRecoilState(projectNameAtom)
    const [rootSize, setRootSize] = useRecoilState(projectRootSizeAtom)
    const [labelType, setLabelType] = useRecoilState(projectLabelTypeAtom)
    const [preferredUnit, setPreferredUnit] = useRecoilState(projectPreferredUnitAtom)

    const [spaceScale, setSpaceScale] = useRecoilState(scalesAtomFamily('space'))
    const [typeScale, setTypeScale] = useRecoilState(scalesAtomFamily('type'))

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onChangeRootSize = (event: ChangeEvent<HTMLInputElement>) => {
        setRootSize(Number(event.target.value))
    }

    const onChangeLabelType = (event: ChangeEvent<HTMLSelectElement>) => {
        setLabelType(event.target.value)
    }

    const onChangePreferredUnit = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target
        setPreferredUnit(value)

        const base: IUnit = { value: value === 'px' ? 16 : 1, suffix: value }

        setSpaceScale({ ...spaceScale, base })
        setTypeScale({ ...typeScale, base })
    }

    return (
        <Wrapper>
            <Content>
                <Header>
                    <DashboardRouteInput value={name} onChange={onChangeName} />
                    <FileName as={'pre'}>{slugify(name)}.abstracts</FileName>
                </Header>
                <Text as={'p'}>
                    [I am not 100% sure how I want to design this, so it&apos;ll be like this for a
                    while]
                </Text>

                <Text as={'h2'}>Settings</Text>

                <SettingsContainer>
                    <FieldSelect
                        id={'project-preferred-unit'}
                        label={'Preferred Unit'}
                        value={preferredUnit}
                        onChange={onChangePreferredUnit}
                    >
                        <option value={'px'}>px</option>
                        <option value={'rem'}>rem</option>
                        <option value={'em'}>em</option>
                    </FieldSelect>
                    {preferredUnit !== 'px' ? (
                        <FieldNumber
                            id={'project-root-size'}
                            label={'Root Size (px)'}
                            value={rootSize}
                            onChange={onChangeRootSize}
                        />
                    ) : (
                        <></>
                    )}
                    <FieldSelect
                        id={'project-label-type'}
                        label={'Project Label Type'}
                        value={labelType}
                        onChange={onChangeLabelType}
                    >
                        <option value={'incremental'}>Incremental</option>
                        <option value={'hundreds'}>Hundreds</option>
                        <option value={'tee-shirt'}>Tee Shirt</option>
                    </FieldSelect>
                </SettingsContainer>

                <Text as={'h2'}>Spacing</Text>
                <ButtonLink to={'/scale/space'} label={'Scale'} />

                <Text as={'h2'}>Typography</Text>
                <ButtonLink to={'/scale/type'} label={'Scale'} />
                <ButtonLink to={'/'} label={'Settings'} />
                <ButtonLink to={'/'} label={'Specimens'} />
                <ButtonLink to={'/'} label={'Rhythm'} />
            </Content>
        </Wrapper>
    )
}

export default DashboardRoute
export { Wrapper, Content, Header, FileName }
