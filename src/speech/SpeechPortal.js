/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import React from 'react'

class SpeechPortal extends React.Component {
  constructor () {
    super()
    this.binds(['toggleSearch'])
  }

  toggleSearch () {
  }

  render () {
    return (
      <div className="speech-portal">
        <input className="search-box" />
        <button onClick={this.toggleSearch}>Search</button>
      </div>
    )
  }
}

export default SpeechPortal
