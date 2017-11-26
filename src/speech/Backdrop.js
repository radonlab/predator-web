/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import {Stage, Shape, Layer} from '@/render'

const earWidth = 20
const earHeight = 50
const earOffset = 10

class DroidEars extends Shape {
  constructor (x, y) {
    super()
    this.x = x
    this.y = y
  }

  onDraw (ctx) {
    let lx0 = this.x - 0.5 * 280 - earWidth
    let rx0 = this.x + 0.5 * 280
    let y0 = this.y - 0.5 * earHeight - earOffset
    ctx.clearRect(lx0, y0, earWidth, earHeight)
    ctx.clearRect(rx0, y0, earWidth, earHeight)
    ctx.rect(lx0, y0, earWidth, earHeight)
    ctx.rect(rx0, y0, earWidth, earHeight)
    ctx.stroke()
  }
}

const headPadH = 10
const headPadV = 15

class DroidHead extends Shape {
  onDraw (ctx) {
    // center to (x, y)
    let x0 = this.x - 0.5 * this.width
    let y0 = this.y - 0.5 * this.height
    let x1 = this.x + 0.5 * this.width
    let y1 = this.y + 0.5 * this.height
    let cx0 = this.x - 0.2 * this.width
    let cx1 = this.x + 0.2 * this.width
    let cy0 = this.y - 0.2 * this.height
    let cy1 = this.y + 0.1 * this.height
    ctx.clearRect(x0, y0, this.width, this.height)
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

const glassRadius = 10
const glassPadH = 4
const glassPadV = 10

class DroidGlass extends Shape {
  onDraw (ctx) {
    let x0 = this.x - 0.5 * this.width
    let y0 = this.y - 0.5 * this.height
    let x1 = this.x + 0.5 * this.width
    let y1 = this.y + 0.5 * this.height
    let cx0 = this.x - 0.2 * this.width
    let cx1 = this.x + 0.2 * this.width
    let cy0 = this.y - 0.2 * this.height
    let cy1 = this.y + 0.2 * this.height
    // Omit clearing for better performance
    // ctx.clearRect(x0, y0, this.width, this.height)
    ctx.beginPath()
    ctx.moveTo(x0 + glassPadH + glassRadius, y0 + glassPadV)
    ctx.bezierCurveTo(
      cx0, y0,
      cx1, y0,
      x1 - glassPadH - glassRadius, y0 + glassPadV
    )
    ctx.arcTo(
      x1 - glassPadH, y0 + glassPadV,
      x1 - glassPadH, y0 + glassPadV + glassRadius,
      glassRadius
    )
    ctx.bezierCurveTo(
      x1, cy0,
      x1, cy1,
      x1 - glassPadH, y1 - glassPadV - glassRadius
    )
    ctx.arcTo(
      x1 - glassPadH, y1 - glassPadV,
      x1 - glassPadH - glassRadius, y1 - glassPadV,
      glassRadius
    )
    ctx.bezierCurveTo(
      cx1, y1,
      cx0, y1,
      x0 + glassPadH + glassRadius, y1 - glassPadV
    )
    ctx.arcTo(
      x0 + glassPadH, y1 - glassPadV,
      x0 + glassPadH, y1 - glassPadV - glassRadius,
      glassRadius
    )
    ctx.bezierCurveTo(
      x0, cy1,
      x0, cy0,
      x0 + glassPadH, y0 + glassPadV + glassRadius
    )
    ctx.arcTo(
      x0 + glassPadH, y0 + glassPadV,
      x0 + glassPadH + glassRadius, y0 + glassPadV,
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
    this.add(new DroidEars(x, y))
    this.add(new DroidHead(x, y, 280, 160))
    this.add(new DroidGlass(x, y - 6, 224, 100))
  }
}

export default Backdrop
