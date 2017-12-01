/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import {Stage} from '@/render'
import Backdrop from './Backdrop'
import WaveForm from './WaveForm'

/**
 * Main controller that visualizes audio in canvas
 * @extends Stage
 */
class Visualizer extends Stage {
  constructor (canvas) {
    super(canvas)
    this.active = false
    this.init()
    // draw first frame
    this.renderFrame()
  }

  init () {
    this.backLayer = new Backdrop()
    this.add(this.backLayer)
    this.waveLayer = new WaveForm()
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
