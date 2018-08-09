import React, { Component } from "react"
import styled from "styled-components"
import { Redirect, Link } from "react-router-dom"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"

const SubscribeMain = styled.main`
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
`

const Label = styled.label`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.33;
  color: #1b161e;
  margin-bottom: 12px;
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

const Input = styled.input`
  height: 60px;
  background-color: #ffffff;
  border: solid 2px #1b161e;
  width: 360px !important; /*sorry*/
  padding: 6px 24px;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 5px;
    width: 344px;
    height: 5px;
    background: #dedede;
    bottom: -5px;
  }
`

const Checkbox = styled.input`
  display: none;

  &:checked {
    + label:before {
      content: "✔";
    }
  }

  + label {
    span {
      margin-top: 10px;
      display: block;
    }

    &:before {
      content: "";
      width: 40px;
      height: 40px;
      background-color: #ffffff;
      border: solid 2px #1b161e;
      display: block;
      float: left;
      margin-right: 10px;
      padding: 7px 10px;
      box-sizing: border-box;
    }
  }
`

export default class extends Component {
  state = { done: false }

  submit = () => {
    this.setState({
      done: true
    })
  }

  render = () => {
    if (this.state.done === true) {
      return <Redirect to="/workshop" />
    }
    return (
      <SubscribeMain>
        <Nav />
        <Main>
          <H2>Subscribe</H2>
          <H3>
            Please Input your email below if you wish to get awesome stuff me
            and YLD do in your email
          </H3>
          <form
            action="https://yld.us16.list-manage.com/subscribe/post?u=d159c019fc10dc08b3914ac05&amp;id=506e3fae8e"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <Wrapper>
              <Label for="mce-FNAME">Name*</Label>
              <Input type="text" name="FNAME" required id="mce-FNAME" />
            </Wrapper>
            <Wrapper>
              <Label for="mce-EMAIL">Email Address*</Label>
              <Input type="email" name="EMAIL" required id="mce-EMAIL" />
            </Wrapper>
            <Wrapper>
              <Label for="mce-MMERGE2">Company</Label>
              <Input type="text" name="MMERGE2" id="mce-MMERGE2" />
            </Wrapper>
            <Wrapper>
              <Label for="mce-MMERGE3">
                What technologies do you currently use?*
              </Label>
              <Input type="text" name="MMERGE3" required id="mce-MMERGE3" />
            </Wrapper>
            <div>
              <Label>Newsletter Permission</Label>
              <p>
                Let's Learn GraphQL will use the email address you provide on
                this form to update you on upcoming workshops. Please let us
                know if you want to hear from us via:
              </p>
              <fieldset name="interestgroup_field">
                <Checkbox
                  type="checkbox"
                  id="gdpr_5345"
                  name="gdpr[5345]"
                  value="Y"
                />

                <Label for="gdpr_5345">
                  <span>Email</span>
                </Label>
              </fieldset>
            </div>

            <Button name="subscribe" onClick={this.submit}>
              Subscribe
            </Button>

            <footer>
              <Link to="/workshop">I don't want to share my information</Link>
            </footer>
          </form>
          <p>
            You can change your mind at any time by clicking the unsubscribe
            link in the footer of any email you receive from us, or by
            contacting us at <a href="mailto:events@yld.io">events@yld.io</a>.
            We will treat your information with respect.
          </p>
        </Main>

        <Footer />
      </SubscribeMain>
    )
  }
}
