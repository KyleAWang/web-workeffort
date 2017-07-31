// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

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
    },  {
      path: '/workeffort',
      name: 'workEffort',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/WorkEffortPage/reducer'),
          import('containers/WorkEffortPage')
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('workEffort', reducer.default),
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
