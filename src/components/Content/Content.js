// @flow
import React, { Component } from 'react'
import { Layout } from 'antd'
import NoteItem from 'components/NoteItem'
import { values } from 'ramda'

type Item = { label: string, description: string }

type Props = {
  list: Array<Item>,
  deleteNote: any,
  editNote: any
}

export default class Content extends Component<Props> {

  render() {
    const { list, editNote, deleteNote } = this.props
    return (
      <Layout.Content className="content">
        <div className="container">
          {values(list).map(item => 
            <NoteItem item={item} editNote={editNote} deleteNote={deleteNote} key={item.id}/>
          )}
        </div>
      </Layout.Content>
    )
  }
}
