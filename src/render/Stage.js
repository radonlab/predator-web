/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import Layer from './Layer'

const store = {
  canvas: null,
  get width () {
    return this.canvas.width
  },
  get height () {
    return this.canvas.height
  }
}

class Stage extends Layer {
  constructor (canvas) {
    super()
    this.canvas = canvas
    this._context = this._initContext()
    if (store.canvas) {
      throw new Error('Stage cannot be reinitialized')
    } else {
      store.canvas = canvas
    }
  }

  _initContext () {
    // get pixel ratio
    let ratio = window.devicePixelRatio
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
    let ctx = this._context
    this.draw(ctx)
  }

  static get (prop) {
    return store[prop]
  }
}

export default Stage
