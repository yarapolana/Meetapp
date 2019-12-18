import React from 'react';
import { Switch, Route as BaseRoute, Redirect } from 'react-router-dom';

import Route from './Route';

import {
  BookingDetails,
  Dashboard,
  EditBooking,
  NewBooking,
  Profile,
  SignUp,
  SignIn,
} from 'pages/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route isPrivate path="/profile" component={Profile} />
      <Route isPrivate path="/dashboard" component={Dashboard} />

      <Route isPrivate path="/new" component={NewBooking} />
      <Route isPrivate path="/bookings/:id" component={BookingDetails} />
      <Route isPrivate path="/edit/:id" component={EditBooking} />

      <BaseRoute render={() => <Redirect to="/" />} />
    </Switch>
  );
}
