import React, { Fragment, Component } from "react"
import styled from "styled-components"
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe
} from "react-stripe-elements"
import Confetti from "react-dom-confetti"

const Label = styled.label`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.33;
  color: #1b161e;
  margin-bottom: 12px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;

  &.CardNumberElement:after {
    width: 341px;
  }

  &.CardExpiryElement:after {
    width: 184px;
  }

  &.CardCVCElement:after {
    width: 108px;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 5px;
    width: 184px;
    height: 5px;
    background: #dedede;
    bottom: -5px;
  }
`

const Flex = styled.div`
  display: flex;
`

const Button = styled.button`
  width: 133px;
  height: 49px;
  background: #37ff00;
  border: none;
  border-bottom: 3px solid #1b161e;
  font-size: 24px;
  color: #1b161e;
  margin-top: 40px;
  margin-bottom: 20px;

  &:disabled {
    background: #90988e;
  }
`

const config = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 106,
  decay: 0.9
}

class FormInner extends Component {
  state = {
    amount: null,
    error: false,
    donated: false,
    errorNumber: true,
    errorExpiry: true,
    errorCVC: true
  }

  onChangeAmount = value => {
    const x = typeof value === "string" ? parseFloat(value) : value
    const amount = Math.max(1, Math.min(1000, Math.floor(x)))
    this.setState({ amount })
  }

  onChangeNumber = value => {
    if (value.error) {
      this.setState({ errorNumber: true })
    } else {
      this.setState({ errorNumber: false })
    }
  }

  onChangeExpiry = value => {
    if (value.error) {
      this.setState({ errorExpiry: true })
    } else {
      this.setState({ errorExpiry: false })
    }
  }

  onChangeCVC = value => {
    if (value.error) {
      this.setState({ errorCVC: true })
    } else {
      this.setState({ errorCVC: false })
    }
  }

  submit = async ev => {
    this.setState({ error: false, donated: false, loading: true })
    let { token } = await this.props.stripe.createToken({ name: "letslearngraphql" })
    try {
      let response = await fetch("/donate", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: token.id,
          amount: this.state.amount
        })
      })
      if (response.ok) {
        this.setState({ donated: true, loading: false })
      }

      if (!response.ok) {
        this.setState({ error: true, loading: false })
      }
    } catch (e) {
      this.setState({ error: true, loading: false })
    }
  }

  render() {
    const {
      amount,
      donated,
      error,
      loading,
      errorNumber,
      errorExpiry,
      errorCVC
    } = this.state
    return (
      <Fragment>
        <Wrapper>
          <Label>Amount (Euro)</Label>
          <input
            type="number"
            required
            onChange={e => this.onChangeAmount(e.target.value)}
            value={amount}
          />
        </Wrapper>
        <Wrapper className="CardNumberElement">
          <Label>Card Number</Label>
          <CardNumberElement
            onChange={this.onChangeNumber}
            className="CardNumberElement"
          />
        </Wrapper>
        <Flex>
          <Wrapper className="CardExpiryElement">
            <Label>Expiry date</Label>
            <CardExpiryElement
              onChange={this.onChangeExpiry}
              className="CardExpiryElement"
            />
          </Wrapper>
          <Wrapper className="CardCVCElement">
            <Label>CVC</Label>
            <CardCVCElement
              onChange={this.onChangeCVC}
              className="CardCVCElement"
            />
          </Wrapper>
        </Flex>
        <Wrapper>
          <Label>ZIP</Label>
          <PostalCodeElement />
        </Wrapper>
        <Confetti active={donated} config={config} />
        <Button
          disabled={
            loading || !amount || errorNumber || errorExpiry || errorCVC
          }
          onClick={this.submit}
        >
          {loading ? "Loading" : "Donate"}
        </Button>
        <div>
          {donated
            ? "Thank you so much! You are an awesome human and because of you, me and React Kyiv can keep making awesome things 🎉"
            : null}
          {error ? "Oh no, there was an error" : null}
        </div>
      </Fragment>
    )
  }
}

export default injectStripe(FormInner)
