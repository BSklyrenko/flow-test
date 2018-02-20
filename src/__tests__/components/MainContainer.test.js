import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from 'components/MainContainer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

const testNote = {
  label: 'Test',
  description: 'Test',
  id: 1
}

const testNote2 = {
  label: 'Test2',
  description: 'Test2',
  id: 1
}

describe('MainContainer', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(React.createElement(MainContainer), div);
    });

    describe('handleStateModal', () => {

      it('should open the modal', () => {
        const component = shallow(<MainContainer />)
        component.instance().openModal()
        expect(component.state().modalFormVisibile).toEqual(true);
      })

      it('should close the modal', () => {
        const component = shallow(<MainContainer />)
        component.instance().closeModal()
        expect(component.state().modalFormVisibile).toEqual(false);
      })
  
    })

    describe('notesListHandle', () => {

      it('should add note to the list', () => {
        const component = shallow(<MainContainer />)
        component.instance().addNote(testNote)
        expect(component.state().todos[1]).toEqual(testNote)
        expect(component.state().noteKey).toEqual(2)
      })

      it('should remove the note from list', () => {
        const component = shallow(<MainContainer />)
        component.instance().deleteNote(1)
        expect(component.state().todos).toEqual({})
      })

      it('should set editable note', () => {
        const component = shallow(<MainContainer />)
        component.instance().editNote(1)
        expect(component.state().editableNote).toEqual(1)
        expect(component.state().modalFormVisibile).toEqual(true)
      })

      it('should save edited note', () => {
        const component = shallow(<MainContainer />)
        component.instance().editNote(1)
        component.instance().addNote(testNote)
        expect(component.state().todos[1]).toEqual(testNote)
        component.instance().saveNote(1, testNote2)
        expect(component.state().todos[1]).toEqual(testNote2)
      })

    })
});