import { Link as A, LinkProps } from "react-router-dom";
import styled from "styled-components";
import Descriptor, { IDescriptorProps } from "../primitives/Descriptor";

interface IButtonLinkProps extends LinkProps, IDescriptorProps{
    label: string;
    outline?: boolean;
} 

interface IButtonLinkWrapperProps{
    outline: boolean;
}

const ButtonLinkWrapper = styled(A)<IButtonLinkWrapperProps>`
    text-decoration: none;
    padding: 0.25rem 1rem;
    border-radius: 0.25rem;
    display: inline-grid;
    place-items: center;

    ${(props) => {
        const { outline } = props;

        if(outline === true){
            return `border: 2px solid black;`
        }
    }}
`;

const ButtonLink = ({ to, label, icon, outline = true }: IButtonLinkProps) => {
    return (<ButtonLinkWrapper to={to} outline={outline}>
        <Descriptor icon={icon} label={label} />
    </ButtonLinkWrapper>);
}

export type { IButtonLinkProps };
export default ButtonLink;
export { ButtonLinkWrapper };