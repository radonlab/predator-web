/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import React from 'react'
import WaveBell from 'wavebell'

class SpeechPortal extends React.Component {
  constructor () {
    super()
    this.binds(['toggleSearch'])
    this.bell = new WaveBell()
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
            <span className="acicon-speech"></span>
          </a>
        </div>
      </div>
    )
  }
}

export default SpeechPortal
