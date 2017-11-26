/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import {Stage, Shape, Layer} from '@/render'
import {cyan, darkGray} from './colordef'

/**
 * Shape that represents sound level
 * @extends Shape
 */
class WaveColumn extends Shape {
  constructor (...args) {
    super(...args)
    this.value = 0
  }

  onDraw (ctx) {
    let width = this.value * this.width
    let x0 = 0.5 * (this.width - width)
    ctx.fillStyle = darkGray
    ctx.fillRect(0, 0, this.width, this.height)
    ctx.fillStyle = cyan
    ctx.fillRect(x0, 0, width, this.height)
  }
}

/**
 * Layer that draws waving columns by values
 * @extends Layer
 */
class WaveForm extends Layer {
  constructor () {
    super()
    const median = 0.5 * Stage.get('width')
    const width = 200
    const height = 12
    const x = median - 0.5 * width
    const y = 60
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
