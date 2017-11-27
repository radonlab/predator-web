// @flow
/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import type {Drawable} from './Drawable'

function toString (obj: any): string {
  if (typeof obj === 'object' && obj !== null) {
    return obj.constructor.name
  } else {
    return '' + obj
  }
}

function assertDrawable (inst) {
  if (!inst || !('draw' in inst)) {
    throw new TypeError(toString(inst) + ' is not drawable')
  }
}

class Layer implements Drawable {
  _children: Array<Drawable>

  constructor () {
    this._children = []
  }

  get length (): number {
    return this._children.length
  }

  getAt (idx: number) {
    return this._children[idx]
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

  redraw () {
    for (let i = 0; i < this._children.length; i++) {
      this._children[i].redraw()
    }
  }

  draw (ctx: CanvasRenderingContext2D) {
    ctx.save()
    this.onDraw(ctx)
    for (let i = 0; i < this._children.length; i++) {
      this._children[i].draw(ctx)
    }
    ctx.restore()
  }

  onDraw (ctx: CanvasRenderingContext2D) {}
}

export default Layer
