import App from "./App"
import React from "react"
import { StaticRouter } from "react-router-dom"
import express from "express"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet, ThemeProvider } from "styled-components"
import bodyParser from "body-parser"

const keySecret = process.env.SECRET_KEY
const stripe = require("stripe")("sk_test_3JOX6AdUaP2ch5T9eUvVXQuN")

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)
const server = express()
const textParser = bodyParser.json()

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .post("/donate", textParser, async (req, res) => {
    try {
      let { status } = await stripe.charges.create({
        amount: req.body.amount * 100,
        currency: "eur",
        description: "An example charge",
        source: req.body.id
      })

      res.json({ status })
    } catch (err) {
      console.log(err)
      res.status(500).end()
    }
  })
  .get("/*", (req, res) => {
    const context = {}
    const Root = () => (
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )

    const sheet = new ServerStyleSheet()
    // When the app is rendered collect the styles that are used inside it
    const markup = renderToString(sheet.collectStyles(<Root />))
    // Generate all the style tags so they can be rendered into the page
    const styleTags = sheet.getStyleTags()

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Let's Learn GraphQL</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i" rel="stylesheet">
        <link href="https://unpkg.com/normalize.css@8.0.0/normalize.css" rel="stylesheet">
        <script src="https://js.stripe.com/v3/"></script>
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ""
        }
         ${styleTags}
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      )
    }
  })

export default server
