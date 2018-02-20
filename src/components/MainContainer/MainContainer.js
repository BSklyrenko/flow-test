// @flow

import React, { Component } from "react";
import { Layout } from "antd";
import Header from "components/Header";
import Content from "components/Content";
import Footer from "components/Footer";
import ModalForm from "components/ModalForm";
import mutations from './mutations'
import type { noteItem, globalState } from '../../types'

export default class MainContainer extends Component<{}, globalState> {

  state = {
    todos: {},
    editableNote: null,
    modalFormVisibile: false,
    noteKey: 1
  };

  closeModal = (): void => { this.setState(mutations.closeModal) }
  openModal = (): void => { this.setState(mutations.openModal) }

  addNote = (note: noteItem): void => { this.setState(mutations.addNote(note)) }
  deleteNote = (id: number): void => { this.setState(mutations.deleteNote(id)) }
  editNote = (id: number): void => { this.setState(mutations.editNote(id)) }
  saveNote = (id: number, note: noteItem): void => { this.setState(mutations.saveNote(id, note)) }

  render() {
    const { modalFormVisibile, todos, editableNote } = this.state;
    return (
      <Layout className="layout">
        <Header openModal={this.openModal} />
        <Content
          list={todos}
          deleteNote={this.deleteNote}
          editNote={this.editNote}
        />
        <Footer />
        <ModalForm
          visible={modalFormVisibile}
          close={this.closeModal}
          add={this.addNote}
          saveNote={this.saveNote}
          editableNote={editableNote && todos[editableNote]}
          editableNoteId={editableNote}
        />
      </Layout>
    );
  }
}
