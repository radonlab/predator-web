/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import '@/core/bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import SpeechPortal from '@/speech/SpeechPortal'

class App extends React.Component {
  render () {
    return (
      <header className="header">
        <div className="container">
          <SpeechPortal />
        </div>
      </header>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
