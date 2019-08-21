import * as React from 'react';

import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const routes = require('../constants/routes.json');


type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <Container>
        <Title>Welcome Strum!</Title>
        <StyledLink to={routes.SIGN_UP}>Sign Up</StyledLink>
        <StyledLink to={routes.SIGN_IN}>Sign In</StyledLink>
      </Container>
    );
  }
}

const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 10px;
  text-align: center;
`

const Title = styled.h2`
  font-size: 5rem;
`

const StyledLink = styled(Link)`
   font-size: 1.4rem;
   display: block;
`
