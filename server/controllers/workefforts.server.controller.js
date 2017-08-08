import axios from 'axios';
import properties from 'properties';
import path from 'path';

import errorHandler from './errors.server.controller';


let service_protocol, service_host, service_port;

properties.parse(path.resolve('server/config/properties/dev.properties'), {path: true, sections:true}, (err, data) => {
  if (err)
    return console.error(err);
  service_protocol = data.workEffort_service.protocol || '';
  service_host = data.workEffort_service.host || '';
  service_port = data.workEffort_service.port || '';
});

export function listWorkEffort(req, res) {
  axios.get(service_protocol+'://'+service_host+':'+service_port+'/getworkefforts')
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send({
        message: errorHandler.getErrorMessage(err)
      });
    });

}

export function createWorkEffort(req, res) {
  
}

export function updateWorkEffort(req, res) {

}

export function deleteWorkEffort(req, res){

}

export function getWorkEffort(req, res) {

}