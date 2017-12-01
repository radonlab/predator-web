/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import dom from '@/util/minidom'

// Extends minidom functions
dom.fn.append = function (el) {
  this.el.appendChild(el)
}

dom.fn.hasChildWithClass = function (clz) {
  let els = this.el.children
  for (let i = 0; i < els.length; i++) {
    if (dom(els[i]).hasClass(clz)) {
      return true
    }
  }
  return false
}

/**
 * Initialize toast container
 */
function initToastBox () {
  let body = dom(document.body)
}

const toast = {
  makeToast (text) {
  }
}

export default toast
