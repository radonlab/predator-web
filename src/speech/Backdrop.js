/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import {Stage, Shape, Layer} from '@/render'

const headWidth = 280
const headHeight = 160

class DroidHead extends Shape {
  constructor (x, y) {
    super()
    this.x = x
    this.y = y
  }

  draw (ctx) {
    // center to (x, y)
    let x0 = this.x - 0.5 * headWidth
    let y0 = this.y - 0.5 * headHeight
    let x1 = this.x + 0.5 * headWidth
    let y1 = this.y + 0.5 * headHeight
    let cx0 = this.x - 0.2 * headWidth
    let cx1 = this.x + 0.2 * headWidth
    let cy0 = this.y - 0.2 * headHeight
    let cy1 = this.y + 0.1 * headHeight
    const padh = 10
    const padv = 15
    ctx.clearRect(x0, y0, headWidth, headHeight)
    ctx.beginPath()
    ctx.moveTo(x0 + padh, y0 + padv)
    ctx.bezierCurveTo(
      cx0, y0,
      cx1, y0,
      x1 - padh, y0 + padv)
    ctx.bezierCurveTo(
      x1, cy0,
      x1, cy1,
      x1 - padh, y1 - padv
    )
    ctx.bezierCurveTo(
      cx1, y1,
      cx0, y1,
      x0 + padh, y1 - padv)
    ctx.bezierCurveTo(
      x0, cy1,
      x0, cy0,
      x0 + padh, y0 + padv
    )
    ctx.closePath()
    ctx.stroke()
  }
}

class Backdrop extends Layer {
  constructor () {
    super()
    let x = 0.5 * Stage.get('width')
    let y = 100
    this.add(new DroidHead(x, y))
  }
}

export default Backdrop
