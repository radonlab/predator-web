// @flow
/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import type {Drawable} from './Drawable'
import Shape from './Shape'

function assertDrawable (inst) {
  if (!('draw' in inst)) {
    throw new TypeError('Argument is not drawable')
  }
}

class Layer implements Drawable {
  _children: Array<Drawable>

  constructor () {
    this._children = []
  }

  add (shape: Drawable) {
    assertDrawable(shape)
    this._children.push(shape)
  }

  remove (shape: Drawable) {
    assertDrawable(shape)
    let i = this._children.indexOf(shape)
    if (i > -1) {
      return this._children.splice(i, 1)[0]
    } else {
      return null
    }
  }

  draw (ctx: CanvasRenderingContext2D) {
  }
}

export default Layer
