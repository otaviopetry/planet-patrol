import React from 'react';

import Header from '../../components/Header';
import Panel from '../../components/Panel';

import { Wrapper, Sidebar, Main, UniverseExplorer, StarInfo } from './styles';

function Dashboard () {
  return (
    <>
    <Header />
    <Wrapper>
      <Sidebar>
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
      </Sidebar>
      <Main>
        <UniverseExplorer>UniverseExplorer</UniverseExplorer>
        <StarInfo>StarInfo</StarInfo>
      </Main>
    </Wrapper>
    </>
  );
}

export default Dashboard;