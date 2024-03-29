import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

import { persistor, store } from './store';

import GlobalStyle from './constants/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoclose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
