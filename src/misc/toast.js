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

dom.fn.remove = function (el) {
  this.el.removeChild(el)
}

dom.fn.getChildWithClass = function (clz) {
  let els = this.el.children
  for (let i = 0; i < els.length; i++) {
    let item = dom(els[i])
    if (item.hasClass(clz)) {
      return item
    }
  }
  return null
}

const dismissTime = 4000
const transitionTime = 1500

/**
 * Get toast container
 * Create new one if not exist
 */
function getToastBox () {
  let body = dom(document.body)
  // append container if not exist
  let box = body.getChildWithClass('toast-box')
  if (!box) {
    box = dom(document.createElement('div'))
    box.addClass('toast-box')
    body.append(box.el)
  }
  return box
}

function addToast (box, text) {
  let toast = dom(document.createElement('div'))
  let hint = dom(document.createElement('span'))
  toast.addClass('toast')
  hint.el.innerText = text
  // require an inner span
  toast.append(hint.el)
  box.append(toast.el)
  // Dismiss after a while
  setTimeout(() => {
    dismissToast(box, toast)
  }, dismissTime)
}

function dismissToast (box, toast) {
  toast.addClass('fade')
  // Remove on transition end
  setTimeout(() => {
    box.remove(toast.el)
  }, transitionTime)
}

const toast = {
  makeToast (text) {
    let box = getToastBox()
    addToast(box, text)
  }
}

export default toast
