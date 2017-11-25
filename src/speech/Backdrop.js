/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import {Stage, Shape, Layer} from '@/render'

const headWidth = 200
const headHeight = 100

class DroidHead extends Shape {
  constructor (x, y) {
    super()
    this.x = x
    this.y = y
  }

  draw (ctx) {
    let x0 = this.x - 0.5 * headWidth
    let y0 = this.y
    let x1 = this.x + 0.5 * headWidth
    let y1 = this.y + headHeight
    let cx0 = this.x - 0.2 * headWidth
    let cx1 = this.x + 0.2 * headWidth
    const padv = 15
    ctx.clearRect(x0, y0, headWidth, headHeight)
    ctx.beginPath()
    ctx.moveTo(x0, y0 + padv)
    ctx.bezierCurveTo(
      cx0, y0,
      cx1, y0,
      x1, y0 + padv)
    ctx.lineTo(x1, y1 - padv)
    ctx.bezierCurveTo(
      cx1, y1,
      cx0, y1,
      x0, y1 - padv)
    ctx.closePath()
    ctx.stroke()
  }
}

class Backdrop extends Layer {
  constructor () {
    super()
    let x = 0.5 * Stage.get('width')
    let y = 30
    this.add(new DroidHead(x, y))
  }
}

export default Backdrop
