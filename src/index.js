import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'


import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers/root.js'


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render((
  <Provider store={store}>
    <Router >
        <App />
    </Router>
  </Provider>
), document.getElementById('root'))
registerServiceWorker();
