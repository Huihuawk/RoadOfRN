"use strict";

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import initStore from './js/store/configureStore';
import router from './js/router'

const Navigator = router.Navigator;
type Props = {};

export default class App extends Component<Props> {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      store: initStore(),
    }
  }

  render() {
    const persistor = persistStore(this.state.store);
    if(this.state.isLoading){
      console.log('loading app');
    }
    return (
      <Provider store={this.state.store}>
        <PersistGate persistor={persistor}>
          <Navigator/>
        </PersistGate>
      </Provider>
    );
  }
}
