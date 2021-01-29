import React from 'react';

import Header from '../../components/Header';
import PlanetPatrol from './components/PlanetPatrol';

import { Wrapper, Main } from './styles';

function Dashboard () {
  return (
    <>
      <Header />
      <PlanetPatrol />
    </>
  );
}

export default Dashboard;