/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import Stage from '@/render/Stage'

class Visualizer extends Stage {
  constructor (canvas) {
    super(canvas)
    this.active = false
  }

  putValue (value) {
  }

  update () {
    if (!this.active) { return }
    requestAnimationFrame(() => this.update())
    // draw frame
    console.log('update')
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
