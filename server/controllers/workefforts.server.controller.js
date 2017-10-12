import axios from 'axios';
import properties from 'properties';
import path from 'path';

import errorHandler from './errors.server.controller';


let serviceProtocol,
  serviceHost,
  servicePort;

properties.parse(path.resolve('server/config/properties/dev.properties'), { path: true, sections: true }, (err, data) => {
  if (err) {
    return console.error(err);
  }
  serviceProtocol = data.workEffort_service.protocol || '';
  serviceHost = data.workEffort_service.host || '';
  servicePort = data.workEffort_service.port || '';
});

export function listWorkEffort(req, res) {
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
    url: `${serviceProtocol}://${serviceHost}:${servicePort}/getworkefforts`,
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: parmas,
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send({
        message: errorHandler.getErrorMessage(err),
      });
    });
}

export function getWorkEffortEventsByPeriod(req, res) {

}

export function createWorkEffort(req, res) {

}

export function updateWorkEffort(req, res) {

}

export function deleteWorkEffort(req, res) {

}

export function getWorkEffort(req, res) {

}
