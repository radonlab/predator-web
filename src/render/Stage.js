/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

class Stage {
  constructor (canvas) {
    this.canvas = canvas
    this.context = this._initContext()
  }

  _initContext () {
    // init canvas size
    let css = getComputedStyle(this.canvas)
    let width = parseInt(css.width, 10)
    let height = parseInt(css.height, 10)
    this.resize(width, height)
    // get context
    return this.canvas.getContext('2d')
  }

  resize (w, h) {
    this.canvas.width = w
    this.canvas.height = h
  }

  renderFrame () {
  }
}

export default Stage
