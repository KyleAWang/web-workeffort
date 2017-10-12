import express from 'express';
import {
  createWorkEffort,
  deleteWorkEffort,
  getWorkEffort,
  listWorkEffort,
  updateWorkEffort,
} from '../controllers/workefforts.server.controller';
import { userLogin, isAuthenticated } from '../controllers/user.server.controller';

export default (app) => {
  const v0 = express.Router();

  v0.route('/signin/')
    .post(userLogin);

  v0.all('/api/*', isAuthenticated);

  v0.route('/api/workefforts/')
    .post(listWorkEffort);

  v0.route('/api/workefforts/:_id')
    .delete(deleteWorkEffort)
    .put(updateWorkEffort)
    .get(getWorkEffort);


  app.use('/v0', v0);
  app.use('/', v0);
};
