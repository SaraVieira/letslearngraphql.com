import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
      font-family: 'Nunito Sans', arial,  sans-serif;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.33;
      letter-spacing: normal;
      color: #484848;

      & * {
        box-sizing: border-box;
      }
  }
  body, html, #root {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
