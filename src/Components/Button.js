import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Button = styled.button`
  width: 133px;
  height: 49px;
  background-color: #37ff00;
  border: none;
  border-bottom: 3px solid #1b161e;
  font-size: 24px;
  color: #1b161e;

  a {
    text-decoration: none;
    color: #1b161e;
  }
`

export default ({ to, children, ...props }) => (
  <Button {...props}>
    {to ? <Link to={to}>{children}</Link> : { children }}
  </Button>
)
