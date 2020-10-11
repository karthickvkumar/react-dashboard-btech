import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import HomeContent from '../components/home-content';

configure({adapter : new Adapter()});

describe('To check the validateEmail Method',() => {
    test('Should return true', () => {
        const component = shallow(<HomeContent />);
        expect(component.instance().validateEmail()).toBe(true);
    });
})