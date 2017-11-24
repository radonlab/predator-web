/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import {Stage, Shape, Layer} from '@/render'

const columnHeight = 15

class WaveColumn extends Shape {
  constructor (x, y) {
    super()
    this.x = x
    this.y = y
    this.value = 0
  }

  draw (ctx) {
    let maxWidth = this.x * 1.6
    let width = this.value * maxWidth
    ctx.clearRect(this.x - 0.5 * maxWidth, this.y, maxWidth, columnHeight)
    ctx.fillRect(this.x - 0.5 * width, this.y, width, columnHeight)
  }
}

class WaveLayer extends Layer {
  constructor () {
    super()
    let x = 0.5 * Stage.get('width')
    let y = 0.5 * Stage.get('height')
    this.col1 = new WaveColumn(x, y + columnHeight)
    this.col2 = new WaveColumn(x, y + 2 * columnHeight + 1)
    this.col3 = new WaveColumn(x, y + 3 * columnHeight + 2)
    this.add(this.col1)
    this.add(this.col2)
    this.add(this.col3)
  }

  set value (value) {
    // pass value downwards
    this.col3.value = this.col2.value
    this.col2.value = this.col1.value
    this.col1.value = value
  }
}

class Visualizer extends Stage {
  constructor (canvas) {
    super(canvas)
    this.active = false
    this.init()
  }

  init () {
    this.waveLayer = new WaveLayer()
    this.add(this.waveLayer)
  }

  putValue (value) {
    this.waveLayer.value = value
  }

  update () {
    if (!this.active) { return }
    requestAnimationFrame(() => this.update())
    // render frame
    this.renderFrame()
  }

  startUpdate () {
    this.active = true
    this.update()
  }

  stopUpdate () {
    this.active = false
  }
}

export default Visualizer
