import React from "react"
import styled from "styled-components"
import Nav from "./Components/Nav"
import Video from "./Components/Video"
import Footer from "./Components/Footer"
import Videos from "./data"
import { Link } from "react-router-dom"
import is from "styled-is"

const HomeMain = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;

  .video {
    max-width: 100%;
  }
`

const Main = styled.section`
  max-width: 100%;
  width: 864px;
  margin: 40px auto;
`

const P = styled.p`
  width: 636px;
  max-width: 100%;
  margin-top: 50px;
`

const Tabs = styled.nav`
  display: flex;
  list-style: none;
  margin-bottom: 40px;

  li:not(:last-child) {
    margin-right: 10px;
  }
`

const Tab = styled(Link)`
  font-family: "Space Mono";
  font-size: 16px;
  font-weight: normal;
  line-height: 1.88;
  color: #1b161e;
  padding: 8px 12px;
  text-decoration: none;

  ${is("active")`
    background: #1B161E;
    color: white;
  `};
`

export default ({ match }) => (
  <HomeMain>
    <Nav />
    <Main>
      <Tabs>
        <li>
          <Tab to="/workshop/1" active={match.params.part === "1"}>
            Part 1
          </Tab>
        </li>
        <li>
          <Tab to="/workshop/2" active={match.params.part === "2"}>
            Part 2
          </Tab>
        </li>
        <li>
          <Tab to="/workshop/3" active={match.params.part === "3"}>
            Part 3
          </Tab>
        </li>
        <li>
          <Tab to="/workshop/4" active={match.params.part === "4"}>
            Part 4
          </Tab>
        </li>
        <li>
          <Tab to="/workshop/5" active={match.params.part === "5"}>
            Part 5
          </Tab>
        </li>
      </Tabs>
      {Videos.filter((_, id) => id + 1 === parseInt(match.params.part, 10)).map(
        (video, i) => (
          <div key={i}>
            <Video {...video} />
            <P>{video.desc}</P>
          </div>
        )
      )}
    </Main>
    <Footer />
  </HomeMain>
)
