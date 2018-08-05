import React from "react"
import styled from "styled-components"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import Form from "../Components/Form"
import { Elements } from "react-stripe-elements"

const DonateMain = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
`

const Main = styled.section`
  max-width: 100%;
  width: 581px;
  margin: 40px auto;

  input,
  .StripeElement {
    height: 60px;
    background-color: #ffffff;
    border: solid 2px #1b161e;
    width: 196px;
    padding: 6px 24px;
  }

  .StripeElement {
    padding-top: 20px;
  }

  .StripeElement.CardNumberElement {
    width: 360px;
  }

  .StripeElement.CardExpiryElement {
    width: 196px;
    margin-right: 12px;
  }

  .StripeElement.CardCVCElement {
    width: 120px;
  }
`

const H2 = styled.h2`
  font-family: "Space Mono";
  font-size: 48px;
  font-weight: normal;
  line-height: 1.25;
  color: #1b161e;
`

const H3 = styled.h3`
  font-size: 30px;
  font-weight: 300;
  line-height: 1.2;
  color: #1b161e;
  margin-bottom: 40px;
`

export default () => (
  <DonateMain>
    <Nav />
    <Main>
      <H2>Donate</H2>
      <H3>Support the author and React Kyiv community.</H3>
      <Elements>
        <Form />
      </Elements>
    </Main>
    <Footer />
  </DonateMain>
)
