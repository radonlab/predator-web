/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import React from 'react'
import WaveBell from 'wavebell'
import cns from 'classnames'

class SpeechPortal extends React.Component {
  constructor () {
    super()
    this.state = {
      speaking: false
    }
    this.binds(['toggleSearch'])
    this.canvas = null
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
        <div className="vstage">
          <canvas ref={el => this.canvas = el}></canvas>
        </div>
      </div>
    )
  }
}

export default SpeechPortal
