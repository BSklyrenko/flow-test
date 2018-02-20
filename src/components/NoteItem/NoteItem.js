// @flow
import React, { PureComponent } from 'react'
import { List, Button } from 'antd'
import type { noteItem } from '../../types'

type Props = {
  item: noteItem,
  deleteNote: any,
  editNote: any
}

export default class NoteItem extends PureComponent<Props> {

  makeNoteActions = (id: number): any => {
    const { deleteNote, editNote } = this.props

    return [
      <Button onClick={_ => { editNote(id) }} type="primary">edit</Button>,
      <Button onClick={_ => { deleteNote(id) }} type="danger">delete</Button>
    ]
  }

  render() {
    const { item } = this.props
    return (
      <List.Item className="list__item" actions={this.makeNoteActions(item.id)}>
        <List.Item.Meta
          title={item.label}
          description={item.description}
        />
      </List.Item>
    )
  }
}