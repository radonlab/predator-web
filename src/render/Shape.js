// @flow
/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import type {Drawable} from './Drawable'

// TODO:(Improve drawing strategy)
// * Add point relative position
// * Add context transform matrix
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
  }

  draw (ctx: CanvasRenderingContext2D) {
    ctx.save()
    this.onDraw(ctx)
    ctx.restore()
  }

  onDraw (ctx: CanvasRenderingContext2D) {}
}

export default Shape
