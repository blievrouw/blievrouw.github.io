/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/pages/LoginPage.js";
import LandingPage from "views/pages/LandingPage.js";
import ProfilePage from "views/pages/ProfilePage.js";
import AboutPage from 'views/pages/subpages/AboutPage';
import ForWhoPage from 'views/pages/subpages/ForWhoPage';
import CoachingOfferingPage from 'views/pages/subpages/CoachingOfferingPage';
import ScheduleOfferingPage from 'views/pages/subpages/ScheduleOfferingPage';
import TestingOfferingPage from 'views/pages/subpages/TestingOfferingPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/about"
        render={props => <AboutPage {...props} />}
      />
      <Route
        path="/who"
        render={props => <ForWhoPage {...props} />}
      />
      <Route
        path="/offerings/coaching"
        render={props => <CoachingOfferingPage {...props} />}
      />
      <Route
        path="/offerings/schedules"
        render={props => <ScheduleOfferingPage {...props} />}
      />
      <Route
        path="/offerings/tests"
        render={props => <TestingOfferingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route path="/login-page" render={props => <LoginPage {...props} />} />
      <Redirect to="/index" />
      <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
