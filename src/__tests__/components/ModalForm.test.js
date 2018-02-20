import React from 'react';
import ReactDOM from 'react-dom';
import ModalForm from 'components/ModalForm';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('ModalForm', () => {
    it('renders without crashing', () => {
        const div = shallow(<ModalForm />)
    });

    describe('should transmit a note data', () => {
        it('transmit note item data', () => {
            const sentData = jest.fn()
            const closeModal = jest.fn()
            const modal = mount(<ModalForm visible={true} add={sentData} editableNote={null} close={closeModal}/> )
            modal.find('[placeholder="title"]').first().simulate('change', {target: { value: 'title'} })
            modal.find('[placeholder="description"]').first().simulate('change', {target: { value: 'description'} })
            modal.find('button').last().simulate('click')
            // console.log( modal.find('[placeholder="title"]').state('title'))
            expect(sentData).toHaveBeenCalledWith({label: 'title', description: 'description'});
            expect(closeModal).toHaveBeenCalled()

            // const rendered = renderer.create(
            //     <ModalForm visible={true}/>
            // );
            // expect(rendered.toJSON()).toMatchSnapshot();
        
            // expect(rendered.toJSON()).toMatchSnapshot();
        })
    })
});