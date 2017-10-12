import axios from 'axios';
import properties from 'properties';
import path from 'path';
import jwt from 'jsonwebtoken';

import errorHandler from './errors.server.controller';

let serviceProtocol,
  serviceHost,
  servicePort,
  privateKey;

properties.parse(path.resolve('server/config/properties/dev.properties'), { path: true, sections: true }, (err, data) => {
  if (err) { return console.error(err); }
  serviceProtocol = data.user_service.protocol || '';
  serviceHost = data.user_service.host || '';
  servicePort = data.user_service.port || '';
  privateKey = data.auth.privateKey;
});

export function userLogin(req, res) {
  console.log(req.body.username);
  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  axios.post(`${serviceProtocol}://${serviceHost}:${servicePort}/user-login`, {
    username: req.body.username,
    password: req.body.password,
  })
    .then((response) => {
      const jwtToken = jwt.sign(user, privateKey, { expiresIn: '1h' });
      const resData = response.data;
      resData.jwtToken = jwtToken;
      res.send(JSON.stringify(resData));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: errorHandler.getErrorMessage(err),
      });
    });
}

export function isAuthenticated(req, res, next) {
  const jwtToken = req.body.token || req.headers['x-access-token'];
  jwt.verify(jwtToken, privateKey, (err) => {
    if (err) {
      return res.status(403).send({
        message: 'User is not authorized',
      });
    }
    return next();
  });
}
