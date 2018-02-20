// @flow

import React, { Component } from 'react'
import { Layout, Button } from 'antd'
import { Logo, Ant } from '../icons'

type Props = {
  openModal: any
}

export default class Header extends Component<Props> {

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Layout.Header className="header">
        <div className="container header__container">
          <span>Simple to do with</span>
          <Logo />
          <span>and</span>
          <Ant />
          <Button
            className="header__add"
            type="primary"
            icon="plus-circle-o"
            onClick={this.props.openModal}
          >
            Add
          </Button>
        </div>
      </Layout.Header>
    )
  }
}
