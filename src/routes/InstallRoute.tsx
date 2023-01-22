import React, { ChangeEvent, useEffect, useState } from 'react'
import styled from 'styled-components'

import Text from '../components/primitives/Text'

import IGoogleFont, { fromURL, toURL } from '../models/IGoogleFont'

const InstallRouteWrapper = styled.div`
    margin: 64px auto;
    max-width: 750px;
`

const InstallTextArea = styled.textarea`
    width: 100%;
    height: 260px;
    padding: 16px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 8px;
    background-color: white;
    resize: none;
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-size: 14px;
    line-height: 1.5;
`

const InstallRoute = () => {
    const [links, setLinks] = useState<string>('')
    const [fonts, setFonts] = useState<IGoogleFont[] | null>(null)

    const onChangeLinks = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setLinks(event.target.value)
    }

    useEffect(() => {
        setFonts(fromURL(links))
    }, [links])

    useEffect(() => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        const href = toURL(fonts)

        if (href != null) {
            link.href = href
        }
        document.head.appendChild(link)

        return () => {
            document.head.removeChild(link)
        }
    }, [fonts])

    return (
        <InstallRouteWrapper>
            <Text as='h1'>Install Google Fonts</Text>
            <InstallTextArea
                value={links}
                onChange={onChangeLinks}
                placeholder={'<link rel="preconnect" href="https://fonts.googleapis.com">...'}
            ></InstallTextArea>
            <pre>{JSON.stringify(fonts, null, 4)}</pre>
        </InstallRouteWrapper>
    )
}

export default InstallRoute
