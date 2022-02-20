import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => (
  <Container>
    <SearchWrapper>
      <SearchInput placeholder="Buscar no Twitter" />
      <SearchIcon />
    </SearchWrapper>

    <StickyBox>
      <Body>
        <List
          title="Talvez você curta"
          elements={[<h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>]}
        />
        <List
          title="Talvez você curta"
          elements={[<h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>]}
        />
        <List
          title="Talvez você curta"
          elements={[<h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>]}
        />
        <List
          title="Talvez você curta"
          elements={[<h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>]}
        />
      </Body>
    </StickyBox>
  </Container>
);

export default SideBar;
