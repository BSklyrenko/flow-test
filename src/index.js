// @flow

import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';
import Root from './Root'

const root = document.getElementById('root')

if (root == null) {
  throw new Error('no root element')
} else {
  ReactDOM.render(<Root />, root)
}

