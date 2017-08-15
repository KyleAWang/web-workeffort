
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const {injectReducer, injectSagas} = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('components/TempHomePage')
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/workeffort',
      name: 'workEffort',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/WorkEffortPage/reducer'),
          import('containers/WorkEffortPage/sagas'),
          import('containers/WorkEffortPage')
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('workEffort', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      onEnter: (nextState, replace) => {
        console.log('router onEnter', window.sessionStorage.getItem('jwtToken'));
        if (!window.sessionStorage.getItem('jwtToken')) {
          replace({
            pathname: '/login',
            state: { nextState: nextState.location.pathname }
          })
        }
      }

    },{
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/UserLogin/reducer'),
          import('containers/UserLogin/sagas'),
          import('containers/UserLogin')
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('user', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }

    },{
      path: '/calendar',
      name: 'calendar',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          // import('containers/CalendarPage/reducer'),
          // import('containers/CalendarPage/sagas'),
          import('containers/CalendarPage')
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          // injectReducer('user', reducer.default);
          // injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }

    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
      },
    },
  ];
}
