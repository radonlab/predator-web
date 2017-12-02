/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import toast from '@/misc/toast'

/**
 * A simple parser for iflytek asr result
 */
class SimpleParser {
  constructor () {
    this.onResult = function (url) {}
  }

  parse (result) {
    // tokenize
    let tokens = this.tokenize(result.result)
    let url = this.analyse(tokens)
    if (url) {
      this.onResult(url)
    } else {
      toast.makeToast('Sorry, Can you speak again?')
    }
  }

  tokenize (dict) {
    let tokens = []
    for (let i = 0; i < dict.length; i++) {
      let item = dict[i]
      let ws = item.ws
      for (let j = 0; j < ws.length; j++) {
        let word = ws[j]
        let cw = word.cw
        for (let k = 0; k < cw.length; k++) {
          let token = cw[k]
          if (this.filter(token)) {
            tokens.push(token.w)
          }
        }
      }
    }
    return tokens
  }

  filter (token) {
    let text = token.w
    return !(/(\u3002|\uFF0C)+/.test(text))
  }

  analyse (tokens) {
    let pred = ''
    let dest = ''
    let args = ''
    if (tokens.length === 1) {
      args = tokens[0]
    } else if (tokens.length === 2) {
      pred = tokens[0]
      dest = tokens[1]
    } else if (tokens.length >= 3) {
      pred = tokens[0]
      dest = tokens[1]
      args = tokens.slice(2).join('')
    }
    // concat url
    let type = ''
    let node = dTree
    switch (pred) {
      case '打开':
        type = 'open'
        node = node.open
        break
      case '搜索':
        type = 'search'
        node = node.search
        break
      default:
        type = 'search'
        node = node.search
        args = pred + dest + args
        dest = ''
        break
    }
    switch (dest) {
      case '百度':
        node = node.bd
        break
      case '谷歌':
        node = node.gg
        break
      case '京东':
        node = node.jd
        break
      case '淘宝':
        node = node.tb
        break
      case '知乎':
        node = node.zh
        break
      default:
        node = node.bd
        break
    }
    if (type === 'search') {
      node = node + args
    }
    return node
  }
}

const dTree = {
  'open': {
    'bd': 'https://www.baidu.com/',
    'gg': 'https://www.google.com/',
    'jd': 'https://www.jd.com/',
    'tb': 'https://www.taobao.com/',
    'zh': 'https://www.zhihu.com/'
  },
  'search': {
    'bd': 'https://www.baidu.com/s?wd=',
    'gg': 'https://www.google.com.hk/search?q=',
    'jd': 'https://search.jd.com/Search?keyword=',
    'tb': 'https://s.taobao.com/search?q=',
    'zh': 'https://www.zhihu.com/search?q='
  }
}

export default SimpleParser
