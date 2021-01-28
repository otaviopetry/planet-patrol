import React from 'react';

import Header from '../../components/Header';

import { Wrapper, Sidebar, Main } from './styles';

function Dashboard () {
  return (
    <>
    <Header />
    <Wrapper>
      <Sidebar />
      <Main />
    </Wrapper>
    </>
  );
}

export default Dashboard;