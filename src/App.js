import React, { Component } from 'react';
import Header from './common/header';
import Index from './common/index';
import store from './store';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    		<Header />
    		<Index />
    	</Provider>
    );
  }
}

export default App;