import express from 'express';
import {
  createWorkEffort,
  deleteWorkEffort,
  getWorkEffort,
  listWorkEffort,
  updateWorkEffort
} from '../controllers/workefforts.server.controller';

export default (app) => {

  let v0 = express.Router();

  v0.route('/api/workefforts/')
    .post(createWorkEffort)
    .get(listWorkEffort);

  v0.route('/api/workefforts/:_id')
    .delete(deleteWorkEffort)
    .put(updateWorkEffort)
    .get(getWorkEffort);

  app.use('/v0', v0);
  app.use('/', v0);


}