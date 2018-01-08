/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import Layer from './Layer'

const store = {}

class Stage extends Layer {
  constructor (canvas) {
    super()
    this.canvas = canvas
    this._context = this._initContext()
  }

  _initContext () {
    // init canvas size
    let css = getComputedStyle(this.canvas)
    let width = parseInt(css.width, 10)
    let height = parseInt(css.height, 10)
    this.resize(width, height)
    // get context
    let ctx = this.canvas.getContext('2d')
    // set scale
    ctx.scale(ratio, ratio)
    return ctx
  }

  resize (w, h) {
    // get pixel ratio
    let ratio = window.devicePixelRatio
    // set pixel size
    this.canvas.width = ratio * w
    this.canvas.height = ratio * h
  }

  renderFrame () {
    let ctx = this._context
    this.draw(ctx)
  }

  static get (prop) {
    return store[prop]
  }
}

export default Stage
