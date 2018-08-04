import React from "react"
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
  font-size: 9vw;
  line-height: 1;
  color: #37ff00;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5px 0;
  border-bottom: 1px solid #463c4d;
  font-weight: normal;

  span {
    max-width: 100%;
    width: 968px;
  }
`

const Main = styled.section`
  max-width: 100%;
  width: 968px;
  margin: 0 auto;
  margin-top: 60px;
  font-weight: normal;
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

  &:hover {
    background: #5fca41;
  }
`

export default () => (
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
      5 hours free GraphQL Workshop taught by Sara Vieira.
      <Redirect to="/workshop">Start learning</Redirect>
    </Main>
  </HomeMain>
)
