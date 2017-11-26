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

class DroidHead extends Shape {
  onDraw (ctx) {
    const hpad = 10
    const vpad = 15
    let cx0 = 0.3 * this.width
    let cx1 = 0.7 * this.width
    let cy0 = 0.3 * this.height
    let cy1 = 0.6 * this.height
    ctx.clearRect(0, 0, this.width, this.height)
    ctx.beginPath()
    ctx.moveTo(hpad, vpad)
    ctx.bezierCurveTo(
      cx0, 0,
      cx1, 0,
      this.width - hpad, vpad
    )
    ctx.bezierCurveTo(
      this.width, cy0,
      this.width, cy1,
      this.width - hpad, this.height - vpad
    )
    ctx.bezierCurveTo(
      cx1, this.height,
      cx0, this.height,
      hpad, this.height - vpad
    )
    ctx.bezierCurveTo(
      0, cy1,
      0, cy0,
      hpad, vpad
    )
    ctx.closePath()
    ctx.stroke()
  }
}

class DroidGlass extends Shape {
  onDraw (ctx) {
    const r = 10
    const hpad = 4
    const vpad = 10
    let cx0 = 0.3 * this.width
    let cx1 = 0.7 * this.width
    let cy0 = 0.3 * this.height
    let cy1 = 0.7 * this.height
    // Omit clearing for better performance
    // ctx.clearRect(x0, y0, this.width, this.height)
    ctx.beginPath()
    ctx.moveTo(hpad + r, vpad)
    ctx.bezierCurveTo(
      cx0, 0,
      cx1, 0,
      this.width - hpad - r, vpad
    )
    ctx.arcTo(
      this.width - hpad, vpad,
      this.width - hpad, vpad + r,
      r
    )
    ctx.bezierCurveTo(
      this.width, cy0,
      this.width, cy1,
      this.width - hpad, this.height - vpad - r
    )
    ctx.arcTo(
      this.width - hpad, this.height - vpad,
      this.width - hpad - r, this.height - vpad,
      r
    )
    ctx.bezierCurveTo(
      cx1, this.height,
      cx0, this.height,
      hpad + r, this.height - vpad
    )
    ctx.arcTo(
      hpad, this.height - vpad,
      hpad, this.height - vpad - r,
      r
    )
    ctx.bezierCurveTo(
      0, cy1,
      0, cy0,
      hpad, vpad + r
    )
    ctx.arcTo(
      hpad, vpad,
      hpad + r, vpad,
      r
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
