import React, { Component } from "react"
import styled from "styled-components"
import YouTube from "@u-wave/react-youtube"
import Play from "../assets/play.svg"

const Wrapper = styled.div`
  width: 854px;
  max-width: 100%;
  height: 480px;
  background: #1b161e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 60px;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 4px;
    width: 842px;
    height: 5px;
    background: #dedede;
    bottom: -5px;
  }
`

const H2 = styled.h2`
  font-family: "Space Mono";
  font-size: 48px;
  font-weight: normal;
  line-height: 1.25;
  color: #37ff00;
`

const Button = styled.button`
  background: transparent;
  border: none;
`

const VideoWrapper = styled.div`
  width: 854px;
  max-width: 100%;
  height: 480px;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 4px;
    width: 842px;
    height: 5px;
    background: #dedede;
    bottom: -5px;
  }
`

export default class extends Component {
  state = {
    playing: false
  }

  render = () =>
    this.state.playing ? (
      <VideoWrapper>
        <YouTube
          className="video"
          video={this.props.id}
          width="854"
          height="480"
          modestBranding
          showRelatedVideos={false}
          showInfo={false}
          onReady={e => e.target.playVideo()}
        />
      </VideoWrapper>
    ) : (
      <Wrapper>
        <H2>{this.props.title}</H2>
        <Button onClick={() => this.setState({ playing: true })}>
          <img src={Play} alt="Play Video" />
        </Button>
      </Wrapper>
    )
}
