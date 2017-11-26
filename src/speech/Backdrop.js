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
    let cx0 = 0.3 * this.width
    let cx1 = 0.7 * this.width
    let cy0 = 0.3 * this.height
    let cy1 = 0.6 * this.height
    ctx.clearRect(0, 0, this.width, this.height)
    ctx.beginPath()
    ctx.moveTo(headPadH, headPadV)
    ctx.bezierCurveTo(
      cx0, 0,
      cx1, 0,
      this.width - headPadH, headPadV
    )
    ctx.bezierCurveTo(
      this.width, cy0,
      this.width, cy1,
      this.width - headPadH, this.height - headPadV
    )
    ctx.bezierCurveTo(
      cx1, this.height,
      cx0, this.height,
      headPadH, this.height - headPadV
    )
    ctx.bezierCurveTo(
      0, cy1,
      0, cy0,
      headPadH, headPadV
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
    let cx0 = 0.3 * this.width
    let cx1 = 0.7 * this.width
    let cy0 = 0.3 * this.height
    let cy1 = 0.7 * this.height
    // Omit clearing for better performance
    // ctx.clearRect(x0, y0, this.width, this.height)
    ctx.beginPath()
    ctx.moveTo(glassPadH + glassRadius, glassPadV)
    ctx.bezierCurveTo(
      cx0, 0,
      cx1, 0,
      this.width - glassPadH - glassRadius, glassPadV
    )
    ctx.arcTo(
      this.width - glassPadH, glassPadV,
      this.width - glassPadH, glassPadV + glassRadius,
      glassRadius
    )
    ctx.bezierCurveTo(
      this.width, cy0,
      this.width, cy1,
      this.width - glassPadH, this.height - glassPadV - glassRadius
    )
    ctx.arcTo(
      this.width - glassPadH, this.height - glassPadV,
      this.width - glassPadH - glassRadius, this.height - glassPadV,
      glassRadius
    )
    ctx.bezierCurveTo(
      cx1, this.height,
      cx0, this.height,
      glassPadH + glassRadius, this.height - glassPadV
    )
    ctx.arcTo(
      glassPadH, this.height - glassPadV,
      glassPadH, this.height - glassPadV - glassRadius,
      glassRadius
    )
    ctx.bezierCurveTo(
      0, cy1,
      0, cy0,
      glassPadH, glassPadV + glassRadius
    )
    ctx.arcTo(
      glassPadH, glassPadV,
      glassPadH + glassRadius, glassPadV,
      glassRadius
    )
    ctx.closePath()
    ctx.stroke()
  }
}

class Backdrop extends Layer {
  constructor () {
    super()
    const median = 0.5 * Stage.get('width')
    // this.add(new DroidEars(x, y))
    this.add(this._initHead(median))
    this.add(this._initGlass(median))
  }

  _initHead (median) {
    const width = 280
    const height = 160
    const x = median - 0.5 * width
    const y = 20
    return new DroidHead(x, y, width, height)
  }

  _initGlass (median) {
    const width = 224
    const height = 100
    const x = median - 0.5 * width
    const y = 44
    return new DroidGlass(x, y, width, height)
  }
}

export default Backdrop
