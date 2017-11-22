/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import React from 'react'

React.Component.prototype.binds = function (methodNames) {
  for (let i = 0; i < methodNames.length; i++) {
    let name = methodNames[i]
    if (typeof this[name] !== 'function') {
      throw new TypeError(`Failed to bind context to ${name}`)
    }
    this[name] = this[name].bind(this)
  }
}
