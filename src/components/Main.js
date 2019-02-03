import React from 'react';
import styled from 'styled-components';

import CommandLineIo from './CommandLineIo';
import { purple } from '../styles/colors';
import Header from './Header';

const StyledDiv = styled.div`
  border: 1px solid ${purple.light};
`;

const Main = () => {
  return (
    <StyledDiv>
      <Header />
      <CommandLineIo />
    </StyledDiv>
  );
};

export default Main;
