/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import {Stage, Shape, Layer} from '@/render'

/**
 * Shape that represents sound level
 * @extends Shape
 */
class WaveColumn extends Shape {
  constructor (x, y) {
    super()
    this.x = x
    this.y = y
    this.value = 0
  }

  onDraw (ctx) {
    let width = this.value * columnWidth
    ctx.clearRect(this.x - 0.5 * columnWidth, this.y, columnWidth, columnHeight)
    ctx.fillRect(this.x - 0.5 * width, this.y, width, columnHeight)
  }
}

/**
 * Layer that draws waving columns by values
 * @extends Layer
 */
class WaveForm extends Layer {
  constructor () {
    super()
    const x = 0.5 * Stage.get('width')
    const y = 60
    const width = 200
    const height = 12
    const gap = height + 2
    for (let i = 0; i < 5; i++) {
      this.add(new WaveColumn(x, y + i * gap, width, height))
    }
  }

  set value (value) {
    // pass value downwards
    for (let i = this.length - 1; i > 0; i--) {
      this.getAt(i).value = this.getAt(i - 1).value
    }
    this.getAt(0).value = value
  }

  clear () {
    for (let i = 0; i < this.length; i++) {
      this.getAt(i).value = 0
    }
  }
}

export default WaveForm
