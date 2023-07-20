import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Screens/Header';
import { Metamask } from './Screens/Metamask';
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' Component={Header} />
        <Route path='/metamask' Component={Metamask} />
      </Routes>
    </Fragment>
  )
}

export default App