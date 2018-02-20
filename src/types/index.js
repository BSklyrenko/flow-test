// @flow

export type noteItem = { label: string, description: string, id: number }

export type globalState = {
  todos: { [id: number]: noteItem },
  editableNote?: null | number,
  modalFormVisibile: boolean,
  noteKey: number
}