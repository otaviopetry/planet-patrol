import React from 'react';

import Header from '../../components/Header';
import Panel from '../../components/Panel';

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
      <Main />
    </Wrapper>
    </>
  );
}

export default Dashboard;