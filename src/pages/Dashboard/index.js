import React from 'react';

import Header from '../../components/Header';
import Panel from '../../components/Panel';
import PlanetPatrol from './components/PlanetPatrol';

import { Wrapper, Sidebar, Main } from './styles';

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
        <PlanetPatrol />
      </Main>
    </Wrapper>
    </>
  );
}

export default Dashboard;