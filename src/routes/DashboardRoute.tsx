import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

import { useRecoilState } from 'recoil'
import { projectLabelTypeAtom, projectNameAtom } from '../recoil/store'

import ButtonLink from '../components/elements/ButtonLink'
import Text from '../components/primitives/Text'
import FieldSelect from '../components/elements/FieldSelect'

import slugify from '../utilities/slugify'

const DashboardRouteWrapper = styled.div``

const DashboardRouteContent = styled.div`
    max-width: 666px;
    margin: 0 auto;
`

// const DashboardRouteTitle = styled(Text)`
//     font-size: 72px;
//     line-height: 1;
//     margin: 0;
// `

const DashboardRouteFileName = styled(Text)`
    margin: 0.5rem 0 0;
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

const DashboardRouteHeader = styled.header`
    padding: 4rem 0 2rem 0;
`

const DashboardRoute = () => {
    const [projectName, setProjectName] = useRecoilState(projectNameAtom)
    const [projectLabelType, setProjectLabelType] = useRecoilState(projectLabelTypeAtom)

    const onChangeProjectName = (event: ChangeEvent<HTMLInputElement>) => {
        setProjectName(event.target.value)
    }

    const onChangeProjectLabelType = (event: ChangeEvent<HTMLSelectElement>) => {
        setProjectLabelType(event.target.value)
    }

    return (
        <DashboardRouteWrapper>
            <DashboardRouteContent>
                <DashboardRouteHeader>
                    <DashboardRouteInput value={projectName} onChange={onChangeProjectName} />
                    <DashboardRouteFileName as={'pre'}>
                        {slugify(projectName)}.abstracts
                    </DashboardRouteFileName>
                </DashboardRouteHeader>
                <Text as={'p'}>
                    [I am not 100% sure how I want to design this, so it&apos;ll be like this for a
                    while]
                </Text>

                <Text as={'h2'}>Settings</Text>
                <FieldSelect
                    id={'project-label-type'}
                    label={'Project Label Type'}
                    value={projectLabelType}
                    onChange={onChangeProjectLabelType}
                >
                    <option value={'incremental'}>Incremental</option>
                    <option value={'hundreds'}>Hundreds</option>
                    <option value={'tee-shirt'}>Tee Shirt</option>
                </FieldSelect>

                <Text as={'h2'}>Spacing</Text>
                <ButtonLink to={'/scale/space'} label={'Scale'} />

                <Text as={'h2'}>Typography</Text>
                <ButtonLink to={'/scale/type'} label={'Scale'} />
                <ButtonLink to={'/'} label={'Settings'} />
                <ButtonLink to={'/'} label={'Specimens'} />
                <ButtonLink to={'/'} label={'Rhythm'} />
            </DashboardRouteContent>
        </DashboardRouteWrapper>
    )
}

export default DashboardRoute
export { DashboardRouteWrapper }
