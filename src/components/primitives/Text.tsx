import styled from 'styled-components'

interface ITextProps {
    reader?: boolean
}

const Text = styled.p<ITextProps>`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-weight: 400;

    h1&,
    h2&,
    h3&,
    h4&,
    h5&,
    h6& {
        font-weight: 800;
        text-transform: lowercase;
        margin: 0 0 16px 0;
    }

    pre& {
        font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
        line-height: 1.5;
        font-size: 16px;
    }

    label& {
        text-transform: lowercase;
        font-size: 16px;
    }

    span& {
        font-size: 16px;
    }

    p& {
        line-height: 1.5;
        font-size: 16px;
    }

    strong& {
        font-weight: 800;
    }

    ${(props) => {
        const { reader } = props

        if (reader === true) {
            return `
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                border: 0;
            `
        }
    }}
`

export type { ITextProps }
export default Text
