/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render () {
    return <h1>Hello React!</h1>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
