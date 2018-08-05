import React from "react"
import Route from "react-router-dom/Route"
import Switch from "react-router-dom/Switch"
import Redirect from "react-router-dom/Redirect"
import Home from "./Home"
import Workshop from "./Workshop"
import { injectGlobal } from "styled-components"

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

      a {
        text-decoration: underline;
        color: #484848;
      }

    .video {
      max-width: 100%;
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
    <Route
      exact
      path="/workshop"
      render={props => (
        <Redirect
          to={{
            pathname: "/workshop/1"
          }}
        />
      )}
    />
    <Route path="/workshop/:part" component={Workshop} />
  </Switch>
)

export default App
