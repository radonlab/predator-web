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
    ctx.clearRect(this.x - 0.5 * headWidth, this.y, headWidth, headHeight)
    ctx.beginPath()
    ctx.moveTo(this.x - 0.5 * headWidth, this.y + 10)
    ctx.bezierCurveTo(this.x - 0.25 * headWidth, this.y,
                      this.x + 0.25 * headWidth, this.y,
                      this.x + 0.5 * headWidth, this.y + 10)
    ctx.lineTo(this.x + 0.5 * headWidth, this.y + headHeight - 10)
    ctx.bezierCurveTo(this.x + 0.25 * headWidth, this.y + headHeight,
                      this.x - 0.25 * headWidth, this.y + headHeight,
                      this.x - 0.5 * headWidth, this.y + headHeight - 10)
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
