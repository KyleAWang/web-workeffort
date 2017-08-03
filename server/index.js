const express = require('express');
const session = require('express-session');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const MongoStore = require('connect-mongo')(session);


const core = require(path.resolve('server/controllers/core.server.controller'));
const setup = require('./middlewares/frontendMiddleware');
const logger = require('./logger');
const mongoose = require('./db/mongoose');
const config = require('./config/env/default');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;

import workEffortRoutes from './routers/workeffort.server.routes';



if (cluster.isMaster){
  for(let i = 0; i < 1; i++){
    cluster.fork();
  }

  cluster.on('exit', function (worker, code, signal) {
    console.log('Worker %d died with code/signal %s. Restarting worker...', worker.process.pid, signal || code);
    cluster.fork();
  });

}else{

  mongoose.connect((db) => {

    const app = express();

// Request body parsing middleware should be above methodOverride
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());


    app.use(cookieParser());
    app.use(session({
      saveUninitialized: true,
      resave: true,
      secret: config.sessionSecret,
      cookie: {
        maxAge: config.sessionCookie.maxAge,
        httpOnly: config.sessionCookie.httpOnly,
      },
      key: config.sessionKey,
      store: new MongoStore({
        mongooseConnection: db.connection,
        collection: config.sessionCollection,
        auto_reconnect: true
      })
    }));

    app.use(flash());

    workEffortRoutes(app);

    app.route('/:url(api)/*').get(core.renderNotFound);


// In production we need to pass these values in instead of relying on webpack
    setup(app, {
      outputPath: resolve(process.cwd(), 'build'),
      publicPath: '/',
    });


// Start your app.
    app.listen(config.port, config.host, (err) => {
      if (err) {
        return logger.error(err.message);
      }

      // Connect to ngrok in dev mode
      if (ngrok) {
        ngrok.connect(config.port, (innerErr, url) => {
          if (innerErr) {
            return logger.error(innerErr);
          }

          logger.appStarted(config.port, config.prettyHost, url);
        });
      } else {
        logger.appStarted(config.port, config.prettyHost);
      }
    });
  });

  process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
    process.exit(1);
  })

}
