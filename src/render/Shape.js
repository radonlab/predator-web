// @flow
/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import type {Drawable} from './Drawable'

class Shape implements Drawable {
  x: number
  y: number
  width: number
  height: number

  constructor (
    x: number = 0,
    y: number = 0,
    width: number = 1,
    height: number = 1
  ) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this._dirty = true
  }

  /**
   * Mark the shape to be redrawn on next frame
   */
  redraw () {
    this._dirty = true
  }

  draw (ctx: CanvasRenderingContext2D) {
    if (this._dirty) {
      ctx.save()
      ctx.translate(this.x, this.y)
      this.onDraw(ctx)
      ctx.restore()
      this._dirty = false
    }
  }

  onDraw (ctx: CanvasRenderingContext2D) {}
}

export default Shape
