import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const HomeMain = styled.main`
  background-color: #1b161e;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  font-size: 30px;
  font-weight: 300;
  line-height: 1.2;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`

const H1 = styled.h1`
  font-family: "Space Mono";
  font-size: 120px;
  line-height: 1;
  color: #37ff00;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5px 0;
  border-bottom: 1px solid #463c4d;
  font-weight: normal;

  @media (max-width: 550px) {
    font-size: 90px;
  }

  @media (max-width: 400px) {
    font-size: 70px;
  }

  span {
    max-width: 90%;
    width: 968px;
  }
`

const Main = styled.section`
  max-width: 90%;
  width: 968px;
  margin: 0 auto;
  margin-top: 60px;
  font-weight: normal;
`

const Anchor = styled.a`
  color: white;
`

const Redirect = styled(Link)`
  height: 60px;
  background-color: #37ff00;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #1b161e;
  width: 200px;
  margin-top: 30px;
  text-decoration: none;

  &:hover {
    background: #5fca41;
  }
`

export default class extends Component {
  state = {
    hasSubscribed: true
  }

  componentDidMount = () =>
    this.setState({
      hasSubscribed: !!localStorage.getItem("letslearngraphql_hasSubscribed")
    })

  render = () => (
    <HomeMain>
      <H1>
        <span>Let’s</span>
      </H1>
      <H1>
        <span>Learn</span>
      </H1>
      <H1>
        <span>GraphQL</span>
      </H1>
      <Main>
        5 hours free GraphQL Workshop taught by{" "}
        <Anchor
          href="https://twitter.com/NikkitaFTW"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sara Vieira
        </Anchor>
        .
        <Redirect to={this.state.hasSubscribed ? "/workshop" : "/subscribe"}>
          Start learning
        </Redirect>
      </Main>
    </HomeMain>
  )
}
