import axios from 'axios';
import properties from 'properties';
import path from 'path';
import jwt from 'jsonwebtoken';

import errorHandler from './errors.server.controller';


let service_protocol, service_host, service_port, privateKey;

properties.parse(path.resolve('server/config/properties/dev.properties'), {path: true, sections: true}, (err, data) => {
  if (err)
    return console.error(err);
  service_protocol = data.workEffort_service.protocol || '';
  service_host = data.workEffort_service.host || '';
  service_port = data.workEffort_service.port || '';
  privateKey = data.auth.privateKey;
});

export function listWorkEffort(req, res) {
  const jwtToken = req.body.token || req.headers['x-access-token'];
  console.log(jwtToken);
  jwt.verify(jwtToken, privateKey, (err, decoded) => {
    console.log('list', err);
    if (err) {
      res.status(403).send({
        message: 'User is not authorized'
      });
    } else {
      const parmas = {};
      if (req.body.workEffortId) {
        parmas.workEffortId = req.body.workEffortId;
      }
      if (req.body.workEffortParentId) {
        parmas.workEffortParentId = req.body.workEffortParentId;
      }
      if (req.body.workEffortTypeId) {
        parmas.body.workEffortTypeId = req.body.workEffortTypeId;
      }
      if (req.body.workEffortPurposeTypeId) {
        parmas.body.workEffortPurposeTypeId = req.body.workEffortPurposeTypeId;
      }
      if (req.body.currentStatusId) {
        parmas.body.currentStatusId = req.body.currentStatusId;
      }
      axios({
        url: service_protocol + '://' + service_host + ':' + service_port + '/getworkefforts',
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: parmas
      })
        .then((response) => {
          res.send(response.data);
        })
        .catch((err) => {
          res.status(500).send({
            message: errorHandler.getErrorMessage(err)
          });
        });
    }
  });

}

export function createWorkEffort(req, res) {

}

export function updateWorkEffort(req, res) {

}

export function deleteWorkEffort(req, res) {

}

export function getWorkEffort(req, res) {

}