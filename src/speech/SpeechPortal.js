/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import React from 'react'
import WaveBell from 'wavebell'
import cns from 'classnames'
import http from '@/core/http'
import toast from '@/misc/toast'
import webport from '@/webport'
import Visualizer from './Visualizer'

class SpeechPortal extends React.Component {
  constructor () {
    super()
    this.state = {
      speaking: false,
      query: ''
    }
    this.binds(['toggleSearch'])
    this.canvas = null
    this.viewer = null
    this.bell = new WaveBell({
      meter: {
        minLimit: 5,
        maxLimit: 35
      }
    })
    this.setupBell(this.bell)
  }

  setupBell (bell) {
    bell.on('wave', e => {
      this.viewer.putValue(e.value)
    })
    bell.on('start', e => {
      this.viewer.startUpdate()
      this.setState({
        speaking: true
      })
    })
    bell.on('stop', e => {
      // send result after stop
      this.sendRequest(this.bell.result)
      this.viewer.stopUpdate()
      this.setState({
        speaking: false
      })
    })
  }

  componentDidMount () {
    this.viewer = new Visualizer(this.canvas)
    webport.initView()
  }

  toggleSearch () {
    if (this.bell.state === 'inactive') {
      this.bell.start(1000 / 25)
      this.setAutoStop()
    } else {
      this.bell.stop()
    }
  }

  setAutoStop () {
    setTimeout(() => {
      if (this.bell.state === 'recording') {
        this.bell.stop()
      }
    }, 1000 * 5)
  }

  sendRequest (audio) {
    let data = new FormData()
    data.append('audio', audio)
    // send audio data
    http.post('/api/asr', data).then(resp => {
      // start mouse blink
      this.viewer.blink()
      this.handleResult(resp.data)
    }).catch(err => {
      this.handleError(err)
    })
  }

  handleResult (result) {
    let overview = result.overview
    // trim end punctuations
    overview = overview.replace(/(\u3002|\uFF0C)+$/, '')
    this.setState({
      query: overview
    })
    webport.parseQuery(result)
  }

  handleError (error) {
    toast.makeToast('Oops... Network error occurred')
    console.error(error) // eslint-disable-line
  }

  render () {
    return (
      <div className="speech-portal">
        <div className="search-box">
          <input type="text" value={this.state.query} />
          <a className="vbtn" href="javascript:void(0)"
            onClick={this.toggleSearch}>
            <span className={'acicon-speech' + cns({'-on': this.state.speaking})}></span>
          </a>
        </div>
        <div className="stage-holder">
          <canvas ref={el => (this.canvas = el)}
            onClick={this.toggleSearch}></canvas>
        </div>
      </div>
    )
  }
}

export default SpeechPortal
