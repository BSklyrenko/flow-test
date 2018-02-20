import React from 'react';
import ReactDOM from 'react-dom';
import NoteItem from 'components/NoteItem';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

const testNote = {
  id: 1,
  label: 'Test',
  description: 'Test'
}

describe('NoteItem', () => {
    it('renders without crashing', () => {
      mount(<NoteItem item={testNote}/>)
    });

    describe('should sent item id', () => {

      it('should sent edit item id', () => {
        const spy = jest.fn()
        const note = mount(<NoteItem item={testNote} editNote={spy}/>)
        note.find('button').first().simulate('click')
        expect(spy).toHaveBeenCalledWith(testNote.id);
      })

      it('should sent delete item id', () => {
        const spy = jest.fn()
        const note = mount(<NoteItem item={testNote} deleteNote={spy}/>)
        note.find('button').last().simulate('click')
        expect(spy).toHaveBeenCalledWith(testNote.id);
      })
    })
});