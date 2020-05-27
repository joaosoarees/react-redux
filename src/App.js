import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar/index.js';
import Videos from './components/Videos/index.js';

import store from './store';

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Videos />
        <Sidebar />
      </Provider>
    </div>
  );
}
