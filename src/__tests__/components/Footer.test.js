import React from 'react';
import ReactDOM from 'react-dom';
import Footer from 'components/Footer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Footer', () => {
    it('renders without crashing', () => {
      mount(<Footer />)
    });

    it('should contain footer', () => {
      const footer = shallow(<Footer />);
      const template = <footer>footer</footer>;
      expect(footer.contains(template)).toEqual(true);
    })
});