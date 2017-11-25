/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import {Stage, Shape, Layer} from '@/render'
import Backdrop from './Backdrop'

const columnWidth = 200
const columnHeight = 12

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

  draw (ctx) {
    let width = this.value * columnWidth
    ctx.clearRect(this.x - 0.5 * columnWidth, this.y, columnWidth, columnHeight)
    ctx.fillRect(this.x - 0.5 * width, this.y, width, columnHeight)
  }
}

/**
 * Layer that draws waving columns by values
 * @extends Layer
 */
class WaveLayer extends Layer {
  constructor () {
    super()
    let x = 0.5 * Stage.get('width')
    let y = 60
    let gap = columnHeight + 2
    const colsNum = 5
    for (let i = 0; i < colsNum; i++) {
      this.add(new WaveColumn(x, y + i * gap))
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

/**
 * Main controller that visualizes audio in canvas
 * @extends Stage
 */
class Visualizer extends Stage {
  constructor (canvas) {
    super(canvas)
    this.active = false
    this.init()
  }

  init () {
    this.backLayer = new Backdrop()
    this.add(this.backLayer)
    this.waveLayer = new WaveLayer()
    this.add(this.waveLayer)
  }

  putValue (value) {
    this.waveLayer.value = value
  }

  clearValue () {
    this.waveLayer.clear()
  }

  update () {
    if (this.active) {
      requestAnimationFrame(() => this.update())
    }
    // render frame
    this.renderFrame()
  }

  startUpdate () {
    this.active = true
    this.update()
  }

  stopUpdate () {
    this.active = false
    this.clearValue()
  }
}

export default Visualizer
