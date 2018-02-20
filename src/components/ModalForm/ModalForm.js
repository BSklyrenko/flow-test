// @flow

import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd'

type Note = {
  title?: string,
  descrition?: string
}

type Props = {
  visible: boolean,
  data?: Note,
  add: any,
  saveNote: any,
  close: any,
  form: any,
  editableNote?: null | Note,
  editableNoteId?: null | number
}

const TextAreaSize = { minRows: 4, maxRows: 6 }

class ModalForm extends Component<Props> {

  makeItem = (name: string, required?: boolean, message: string): any => {
    const { form: {getFieldDecorator}, editableNote } = this.props

    return getFieldDecorator(name, {
      rules: [{ required, message }],
      initialValue: editableNote ? editableNote[name] : ''
    })
  }

  onSubmit = (): void => {
    const { form, add, close, saveNote, editableNote, editableNoteId } = this.props

    form.validateFields((err, values) => {
      if (!err) {

        if (editableNote) {
          saveNote(editableNoteId, values)
        } else {
          add(values)
        }

        form.resetFields()
        close()
      }
    })
  }

  onCancel = (): void => {
    const { close, form } = this.props
    form.resetFields()
    close()
  }

  render() {
    const { visible, editableNote } = this.props
    return (
      <Modal
        title="Form"
        visible={visible}
        onOk={this.onSubmit}
        okText={editableNote ? 'Save' : 'Add'}
        onCancel={this.onCancel}
      >
        <Form>
          <Form.Item>
            {this.makeItem('label', true, 'Please fill the title')(
              <Input placeholder="title"/>
            )}
          </Form.Item>
          <Form.Item>
            {this.makeItem('description', true, 'Please fill the description')(
              <Input.TextArea placeholder="description" autosize={TextAreaSize}/>
            )}
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(ModalForm)