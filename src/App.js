import React, {useState} from 'react';
import {Provider} from 'react-redux';
import Store from './Services/Store';
import RootPage from './Screens/RootPage';

const App = () => {

  return(
    <Provider store = {Store} >
      <RootPage />
    </Provider>
  )
}

export default App