// @flow
/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import Drawable from './Drawable'
import Shape from './Shape'

function assertType (inst, type) {
  if (!(inst instanceof type)) {
    throw new TypeError('Expect an instance of ' + type.name)
  }
}

class Layer implements Drawable {
  constructor () {
    this._children = []
  }

  add (shape) {
    assertType(shape, Shape)
    this._children.push(shape)
  }

  remove (shape) {
    assertType(shape, Shape)
    let i = this._children.indexOf(shape)
    if (i > -1) {
      return this._children.splice(i, 1)[0]
    } else {
      return null
    }
  }
}

export default Layer
