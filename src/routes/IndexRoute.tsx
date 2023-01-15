import styled from "styled-components";
import Text from "../components/primitives/Text";
import ButtonLink from "../components/elements/ButtonLink";
import { FilePlus } from "../assets/icons";

const IndexRouteWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const IndexRouteContent = styled.div`
    max-width: 666px;
    margin: 0 auto;
`;

const IndexRouteTitle = styled(Text)`
    font-size: 90px;
    margin: 0; 
    text-align: left;
    text-transform: lowercase;
    line-height: 1;
`;

const IndexRoute = () => {
    return <IndexRouteWrapper>
        <IndexRouteContent>
            <IndexRouteTitle as='h1'>Abstracts</IndexRouteTitle>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptates fuga ex, odio 
                ipsa labore nulla cupiditate consequuntur qui facere expedita dolores enim distinctio quia debitis 
                iusto, explicabo blanditiis eveniet.
            </Text>
            <ButtonLink to={'/dashboard'} icon={FilePlus} label={'New Project'} />
        </IndexRouteContent>
    </IndexRouteWrapper>
}

export default IndexRoute;