import { FunctionComponent, SVGProps } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Text, { ITextProps } from "./Text";

interface IDescriptorProps extends ITextProps {
    icon?: FunctionComponent<SVGProps<SVGSVGElement> & {title?: string | undefined}>;
    label: string;
}

const DescriptorWrapper = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

const DescriptorText = styled(Text)`
    color: black;
    text-transform: lowercase;
`;

const Descriptor = ({ icon, label, reader }: IDescriptorProps) => {
    return (
        <DescriptorWrapper>
            { icon !== undefined ? <Icon icon={icon} /> : null }
            <DescriptorText as={'span'} reader={reader}>{ label }</DescriptorText>
        </DescriptorWrapper>
    );
}

export type { IDescriptorProps };
export default Descriptor;
export { DescriptorWrapper, DescriptorText }