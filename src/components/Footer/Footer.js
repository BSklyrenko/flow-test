// @flow
import React, { Component } from 'react'
import { Layout } from 'antd'

export default class Footer extends Component<{}> {

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Layout.Footer>
        <footer>
          footer
        </footer>
      </Layout.Footer>
    )
  }
}