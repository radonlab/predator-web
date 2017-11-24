/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import {Stage, Shape, Layer} from '@/render'

class WaveColumn extends Shape {
  constructor () {
    super()
  }

  draw (ctx) {
    console.log(ctx)
  }
}

class WaveLayer extends Layer {
  constructor () {
    super()
    this.col1 = new WaveColumn()
    this.col2 = new WaveColumn()
    this.col3 = new WaveColumn()
    this.add(this.col1)
    this.add(this.col2)
    this.add(this.col3)
  }

  setValue (value) {
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
    this.waveLayer.setValue(value)
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
