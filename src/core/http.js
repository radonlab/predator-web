/*
 * Copyright (C) 2017, Skyler.
 * Use of this source code is governed by the MIT license that can be
 * found in the LICENSE file.
 */

import axios from 'axios'

const http = axios.create({
  baseURL: location.origin
})

export default http
