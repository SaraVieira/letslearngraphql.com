import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from "./Button"
import logo from "../assets/logo.svg"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`

export default () => (
  <Nav>
    <Link to="/">
      <img src={logo} height="48px" width="222px" alt="let's learn graphql" />
    </Link>
    <Button to="/donate">Donate</Button>
  </Nav>
)
