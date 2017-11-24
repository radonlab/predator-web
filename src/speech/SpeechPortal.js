/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import React from 'react'
import WaveBell from 'wavebell'
import cns from 'classnames'
import Visualizer from './Visualizer'

class SpeechPortal extends React.Component {
  constructor () {
    super()
    this.state = {
      speaking: false
    }
    this.binds(['toggleSearch'])
    this.canvas = null
    this.viewer = null
    this.bell = new WaveBell()
    this.setupBell(this.bell)
  }

  setupBell (bell) {
    bell.on('wave', e => {
      console.log(e)
    })
    bell.on('start', e => {
      this.setState({
        speaking: true
      })
    })
    bell.on('stop', e => {
      this.setState({
        speaking: false
      })
    })
  }

  componentDidMount () {
    this.viewer = new Visualizer(this.canvas)
  }

  toggleSearch () {
    if (this.bell.state === 'inactive') {
      this.bell.start(1000 / 25)
    } else {
      this.bell.stop()
    }
  }

  render () {
    return (
      <div className="speech-portal">
        <div className="search-box">
          <input type="text" />
          <a className="vbtn" href="javascript:void(0)"
            onClick={this.toggleSearch}>
            <span className={'acicon-speech' + cns({ '-on': this.state.speaking })}></span>
          </a>
        </div>
        <div className="stage-holder">
          <canvas ref={el => this.canvas = el}></canvas>
        </div>
      </div>
    )
  }
}

export default SpeechPortal
