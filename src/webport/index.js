/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import dom from '@/util/minidom'

// Extends minidom

/**
 * Insert the element after this dom
 * @param {Element} el - element to be inserted
 */
dom.fn.insertAfter = function (el) {
  let next = this.el.nextSibling
  this.el.parentNode.insertBefore(el, next)
}

const webport = {
  frame: null,
  initView () {
    this.frame = document.createElement('iframe')
    this.initStyles(this.frame.style)
    dom(document.getElementById('app')).insertAfter(this.frame)
  },
  initStyles (style) {
    style.width = '100%'
    style.border = 'none'
  }
}

export default webport
