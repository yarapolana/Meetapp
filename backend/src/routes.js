import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import {
  BookingController,
  FileController,
  SessionController,
  SubscriptionController,
  UserController,
  OrganizerController,
} from './app/controllers';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Test route to test server
routes.get('/', (req, res) => {
  return res.send('All is working here');
});

// Pre user auth
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // Authenticated routes

// After user auth
routes.put('/users', UserController.update);

// CRUD Bookings
routes.post('/bookings', BookingController.store);
routes.get('/bookings', BookingController.index);
routes.put('/bookings/:id', BookingController.update);
routes.delete('/bookings/:id', BookingController.delete);

// Get single booking
routes.get('/bookings/:id', BookingController.one);

// Book appointment
routes.get('/organizer', OrganizerController.index);
routes.get('/subscriptions', SubscriptionController.index);

// Make a subscription
routes.post('/bookings/:id/subscriptions', SubscriptionController.store);
routes.delete('/bookings/:id/subscriptions', SubscriptionController.delete);

// Upload images
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
