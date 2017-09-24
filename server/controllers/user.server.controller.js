import axios from 'axios';
import properties from 'properties';
import path from 'path';
import jwt from 'jsonwebtoken';

import errorHandler from './errors.server.controller';

let service_protocol,
  service_host,
  service_port,
  privateKey;

properties.parse(path.resolve('server/config/properties/dev.properties'), { path: true, sections: true }, (err, data) => {
  if (err) { return console.error(err); }
  service_protocol = data.user_service.protocol || '';
  service_host = data.user_service.host || '';
  service_port = data.user_service.port || '';
  privateKey = data.auth.privateKey;
});

export function userLogin(req, res) {
  console.log(req.body.username);
  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  axios.post(`${service_protocol}://${service_host}:${service_port}/user-login`, {
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
