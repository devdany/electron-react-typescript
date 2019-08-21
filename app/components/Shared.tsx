import * as React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const routes = require('../constants/routes.json');

const BackButtonArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
  margin-top: 15px;
`

export const SubmitButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: blue;
  color: white;
`

export const BackButton = () => {
  return (
    <BackButtonArea>
      <Link to={routes.HOME}>
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
    </BackButtonArea>
  )
}

