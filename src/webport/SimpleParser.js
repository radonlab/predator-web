/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

/**
 * A simple parser for iflytek asr result
 */
class SimpleParser {
  constructor () {
  }

  parse (result) {
    // tokenize
    let tokens = this.tokenize(result.result)
    console.log(tokens)
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
          tokens.push(token)
        }
      }
    }
    return tokens
  }
}

export default SimpleParser
