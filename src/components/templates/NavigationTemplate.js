import React from 'react';
import styled from 'styled-components';
import { NavigationTopbar } from 'components/organisms';

const Container = styled.div`
    width: 100%;
`;

const Content = styled.div`
    width: 100%;
    margin-top: 25px;
`;

const StyledTopbar = styled(NavigationTopbar)`
  position: sticky;
  top: 0;
`;

const NavigationTemplate = ({ className, children, ...other }) => (
    <Container className={className}>
        <StyledTopbar {...other}/>
        <Content>
            { children }
        </Content>
    </Container>
);

export default NavigationTemplate;
