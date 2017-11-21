/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import SpeechPortal from '@/speech/SpeechPortal'
import './index.scss'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <SpeechPortal />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
