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

  constructor () {
    this.x = 0
    this.y = 0
  }

  draw (ctx: CanvasRenderingContext2D) {}
}

export default Shape
