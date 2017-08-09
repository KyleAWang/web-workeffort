import axios from 'axios';
import properties from 'properties';
import path from 'path';

import errorHandler from './errors.server.controller';

let service_protocol, service_host, service_port;

properties.parse(path.resolve('server/config/properties/dev.properties'), {path: true, sections: true}, (err, data) => {
  if (err)
    return console.error(err);
  service_protocol = data.user_service.protocol || '';
  service_host = data.user_service.host || '';
  service_port = data.user_service.port || '';
});

export function userLogin(req, res) {
  console.log(req.body.username);
  axios.post(service_protocol + '://' + service_host + ':' + service_port + '/user-login', {
    username: req.body.username,
    password: req.body.password
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: errorHandler.getErrorMessage(err)
      });
    });
}