/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import {Stage, Shape, Layer} from '@/render'
import {orange, darkGray, dustGray, lightGray} from './colordefs'

/**
 * Decorative gear on the two sides of the droid
 * @extends Shape
 */
class DroidGear extends Shape {
  constructor (side, ...args) {
    super(...args)
    if (side === 'r') {
      // no transform
      this.matrix = [1, 0, 0, 1, 0, 0]
    } else {
      // Y-axis flip + right moving
      this.matrix = [-1, 0, 0, 1, this.width, 0]
    }
    this.bows = [
      {color: lightGray, size: 1},
      {color: orange, size: 0.4}
    ]
  }

  onDraw (ctx) {
    const pad = 10
    let cy0 = 0.3 * this.height
    let cy1 = 0.7 * this.height
    ctx.clearRect(0, 0, this.width, this.height)
    ctx.transform.apply(ctx, this.matrix)
    for (let i = 0; i < this.bows.length; i++) {
      let bow = this.bows[i]
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(pad, 0)
      ctx.bezierCurveTo(
        this.width * bow.size, cy0,
        this.width * bow.size, cy1,
        pad, this.height
      )
      ctx.lineTo(0, this.height)
      ctx.closePath()
      ctx.fillStyle = bow.color
      ctx.fill()
    }
  }
}

/**
 * Head of the droid
 * @extends Shape
 */
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
    ctx.fillStyle = lightGray
    ctx.fill()
  }
}

/**
 * Glass pane that displays waveform inside
 * @extends Shape
 */
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
    ctx.fillStyle = darkGray
    ctx.fill()
  }
}

class DroidMouth extends Shape {
  onDraw (ctx) {
    let x0 = 0.1 * this.width
    let x1 = 0.9 * this.width
    ctx.beginPath()
    ctx.moveTo(0, this.height)
    ctx.lineTo(x0, 0)
    ctx.lineTo(x1, 0)
    ctx.lineTo(this.width, this.height)
    ctx.strokeStyle = dustGray
    ctx.stroke()
  }
}

/**
 * Layer that draws all background elements
 * @extends Layer
 */
class Backdrop extends Layer {
  constructor () {
    super()
    const median = 0.5 * Stage.get('width')
    this.add(this._initAddons(median))
    this.add(this._initHead(median))
    this.add(this._initGlass(median))
    this.add(this._initMouth(median))
  }

  _initAddons (median) {
    const width = 35
    const height = 80
    const offsetX = 135
    let lx = median - offsetX - width
    let rx = median + offsetX
    let y = 60
    let layer = new Layer()
    layer.add(new DroidGear('l', lx, y, width, height))
    layer.add(new DroidGear('r', rx, y, width, height))
    return layer
  }

  _initHead (median) {
    const width = 280
    const height = 160
    let x = median - 0.5 * width
    let y = 20
    return new DroidHead(x, y, width, height)
  }

  _initGlass (median) {
    const width = 224
    const height = 100
    let x = median - 0.5 * width
    let y = 44
    return new DroidGlass(x, y, width, height)
  }

  _initMouth (median) {
    const width = 60
    const height = 15
    let x = median - 0.5 * width
    let y = 160
    return new DroidMouth(x, y, width, height)
  }
}

export default Backdrop
