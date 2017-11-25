/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import {Stage, Shape, Layer} from '@/render'

const headWidth = 280
const headHeight = 160
const headPadH = 10
const headPadV = 15

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
    ctx.clearRect(x0, y0, headWidth, headHeight)
    ctx.beginPath()
    ctx.moveTo(x0 + headPadH, y0 + headPadV)
    ctx.bezierCurveTo(
      cx0, y0,
      cx1, y0,
      x1 - headPadH, y0 + headPadV
    )
    ctx.bezierCurveTo(
      x1, cy0,
      x1, cy1,
      x1 - headPadH, y1 - headPadV
    )
    ctx.bezierCurveTo(
      cx1, y1,
      cx0, y1,
      x0 + headPadH, y1 - headPadV
    )
    ctx.bezierCurveTo(
      x0, cy1,
      x0, cy0,
      x0 + headPadH, y0 + headPadV
    )
    ctx.closePath()
    ctx.stroke()
  }
}

const glassWidth = 210
const glassHeight = 100
const glassRadius = 10
const glassPad = 10

class DroidGlass extends Shape {
  constructor (x, y) {
    super()
    this.x = x
    this.y = y
  }

  draw (ctx) {
    let x0 = this.x - 0.5 * glassWidth
    let y0 = this.y - 0.5 * glassHeight
    let x1 = this.x + 0.5 * glassWidth
    let y1 = this.y + 0.5 * glassHeight
    let cx0 = this.x - 0.2 * glassWidth
    let cx1 = this.x + 0.2 * glassWidth
    // Omit clearing for better performance
    // ctx.clearRect(x0, y0, glassWidth, glassHeight)
    ctx.beginPath()
    ctx.moveTo(x0 + glassRadius, y0 + glassPad)
    ctx.bezierCurveTo(
      cx0, y0,
      cx1, y0,
      x1 - glassRadius, y0 + glassPad
    )
    ctx.arcTo(
      x1, y0 + glassPad,
      x1, y0 + glassPad + glassRadius,
      glassRadius
    )
    ctx.lineTo(x1, y1 - glassPad - glassRadius)
    ctx.arcTo(
      x1, y1 - glassPad,
      x1 - glassRadius, y1 - glassPad,
      glassRadius
    )
    ctx.bezierCurveTo(
      cx1, y1,
      cx0, y1,
      x0 + glassRadius, y1 - glassPad
    )
    ctx.arcTo(
      x0, y1 - glassPad,
      x0, y1 - glassPad - glassRadius,
      glassRadius
    )
    ctx.lineTo(x0, y0 + glassPad + glassRadius)
    ctx.arcTo(
      x0, y0 + glassPad,
      x0 + glassRadius, y0 + glassPad,
      glassRadius
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
    this.add(new DroidGlass(x, y - 6))
  }
}

export default Backdrop
