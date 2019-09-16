/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import Home from '../Home/Loadable';
import Navbar from '../../components/Navbar/Loadable';
import Addtodo from '../Addtodo/Loadable';
import Shopingcard from '../Shopingcard/Loadable';

export default function App() {
  return (
    <div>
      <Route path="/" component={Navbar} />
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/todo" component={Addtodo} />
        <Route
          path="/Shopingcard"
          render={props => <Shopingcard {...props} />}
        />

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
