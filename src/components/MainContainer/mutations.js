// @flow

import { curry, dissoc, merge } from 'ramda'
import type { noteItem, globalState } from '../../types'

const closeModal = (): {
  modalFormVisibile: boolean,
  editableNote: null
} => ({ modalFormVisibile: false, editableNote: null });

const openModal = (): { modalFormVisibile: boolean } => ({ modalFormVisibile: true })

const deleteNote = (id: number, state: globalState): { todos: { [id: number]: noteItem }} => ({
  todos: dissoc(id, state.todos)
})

const addNote = (note: noteItem, state: globalState): {
  todos: { [id: number]: noteItem }, noteKey: number
} => ({
  todos: merge(state.todos, { [state.noteKey]: { id: state.noteKey, ...note } }),
  noteKey: state.noteKey + 1
})

const editNote = (id: number, state: globalState): {
  editableNote: number,
  modalFormVisibile: boolean
} => ({
  editableNote: id,
  modalFormVisibile: true
})

const saveNote = (id: number, note: noteItem, state: globalState): {
  todos: { [id: number]: noteItem },
  editableNote: null
} => ({
  todos: merge(state.todos, {[id]: merge(state.todos[id], note)}),
  editableNote: null
})

export default {
  closeModal,
  openModal,
  deleteNote: curry(deleteNote),
  addNote: curry(addNote),
  editNote: curry(editNote),
  saveNote: curry(saveNote)
}