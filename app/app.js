import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';
import { useScroll } from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { makeSelectLocationState } from 'containers/App/selectors';

import '!file-loader?name=[name].[ext]!./manifest.json';

import configureStore from './store';

import App from './containers/App';

import './global-styles';

import createRoutes from './routes';
injectTapEventPlugin();

const openSansObserver = new FontFaceObserver('Roboto', {});


openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

const initialState = {};
const store = configureStore(initialState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <Router
          history={history}
          routes={rootRoute}
          render={
            // Scroll to top when going to a new page, imitating default browser
            // behaviour
            applyRouterMiddleware(useScroll())
          }
        />
      </MuiThemeProvider>
    </Provider>
    ,
    document.getElementById('app')
  );
};

render();

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
