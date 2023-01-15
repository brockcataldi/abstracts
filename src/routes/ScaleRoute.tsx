import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowLeft } from '../assets/icons';

import ButtonLink from '../components/elements/ButtonLink';
import Aside from '../components/patterns/Aside';
import Text from '../components/primitives/Text';

const ScaleRouteWrapper = styled.div``;

const ScaleRouteTitle = styled(Text)`
    
    h1&{
        margin-top: 1rem;
    }
`;

const ScaleRoute = () => {
    const { variant } = useParams<{ variant: string }>();

    return (<ScaleRouteWrapper>
        <Aside>
            <ButtonLink to={'/dashboard'} label={'Back to the Dashboard'} outline={false} icon={ArrowLeft}/>
            <ScaleRouteTitle as={'h1'}>{`${variant} Scale`}</ScaleRouteTitle>
        </Aside>
    </ScaleRouteWrapper>);
}

export default ScaleRoute;