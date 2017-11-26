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
// * Add save/restore before/after draw
class Shape implements Drawable {
  x: number
  y: number

  constructor () {
    this.x = 0
    this.y = 0
  }

  doDraw (ctx: CanvasRenderingContext2D) {
    this.draw(ctx)
  }

  draw (ctx: CanvasRenderingContext2D) {}
}

export default Shape
