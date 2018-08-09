import React from "react"
import Route from "react-router-dom/Route"
import Switch from "react-router-dom/Switch"
import Redirect from "react-router-dom/Redirect"
import { injectGlobal } from "styled-components"
import { StripeProvider } from "react-stripe-elements"
import Home from "./Pages/Home"
import Workshop from "./Pages/Workshop"
import Donate from "./Pages/Donate"
import Subscribe from "./Pages/Subscribe"

injectGlobal`
  body {
      font-family: 'Nunito Sans', arial,  sans-serif;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.33;
      letter-spacing: normal;
      color: #484848;

      input:not([type="checkbox"]) {
        height: 60px !important;
        background-color: #ffffff;
        border: solid 2px #1b161e;
        min-width: 196px;
        padding: 6px 24px;
      }
      fieldset {
        padding: 0;
        border: none;
      }

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

class App extends React.Component {
  state = { stripe: null, complete: false }

  componentDidMount() {
    this.setState({ stripe: window.Stripe("xxx") })
  }

  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
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
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/subscribe" component={Subscribe} />
        </Switch>
      </StripeProvider>
    )
  }
}

export default App
