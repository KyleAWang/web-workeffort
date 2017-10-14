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
  const params = [];
  if (req.body.calendarType) {
    params.body.calendarType = req.body.calendarType;
  }
  if (req.body.partyId) {
    params.body.partyId = req.body.partyId;
  }
  if (req.body.partyIds) {
    params.body.partyIds = req.body.partyIds;
  }
  if (req.body.facilityId) {
    params.body.facilityId = req.body.facilityId;
  }
  if (req.body.workEffortTypeId) {
    params.body.workEffortTypeId = req.body.workEffortTypeId;
  }
  if (req.body.start) {
    params.body.start = req.body.start;
  }
  if (req.body.numPeriods) {
    params.body.numPeriods = req.body.numPeriods;
  }
  if (req.body.periodType) {
    params.body.periodType = req.body.periodType;
  }
  if (req.body.filterOutCanceledEvents) {
    params.body.filterOutCanceledEvents = req.body.filterOutCanceledEvents;
  }
  if (req.body.entityExprList) {
    params.body.entityExprList = req.body.entityExprList;
  }
  if (req.body.username) {
    params.body.username = req.body.username;
  }
  if (req.body.password) {
    params.body.password = req.body.password;
  }
}

export function createWorkEffort(req, res) {

}

export function updateWorkEffort(req, res) {

}

export function deleteWorkEffort(req, res) {

}

export function getWorkEffort(req, res) {

}
