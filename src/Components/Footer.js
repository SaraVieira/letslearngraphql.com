import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  font-size: 16px;
  font-weight: 300;
  text-align: right;
  color: #484848;
  padding: 30px;
  padding-bottom: 14px;
  border-top: 1px solid #dedede;
  margin-top: 65px;
`

export default () => (
  <Footer>
    Course by{" "}
    <a
      href="https://twitter.com/NikkitaFTW"
      target="_blank"
      rel="noopener noreferrer"
    >
      Sara Vieira
    </a>
    . Supported by{" "}
    <a
      href="https://twitter.com/reactkyiv"
      target="_blank"
      rel="noopener noreferrer"
    >
      React Kyiv
    </a>{" "}
    &{" "}
    <a
      href="https://twitter.com/yldio"
      target="_blank"
      rel="noopener noreferrer"
    >
      YLD
    </a>
  </Footer>
)
