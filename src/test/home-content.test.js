import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
// import HomeContent from '../components/home-content';
import Sample from '../components/sample';
import renderer from 'react-test-renderer';

import ApiService  from '../services/api';

configure({adapter : new Adapter()});

test('Should return true', () => {
    //const component = shallow(<Sample />);
    const tree = renderer
    .create(<Sample />)
    .toJSON();
  expect(tree).toMatchSnapshot();
   // expect(component).toMatchSnapshot();
});

// describe('To check the validateEmail Method',() => {
//     test('Should return true', () => {
//         const component = shallow(<Sample />);
//         // expect(component.instance().validateEmail()).toBe(true);
//         expect(component).toMatchSnapshot();
//     });

//     test('Check the jest function', () => {
//         // console.log("Before Mocking", ApiService.validateEmail())
        
//         // ApiService.validateEmail = jest.fn(() => 5)
//         ApiService.validateEmail = jest.fn();
//         ApiService.validateEmail.mockReturnValue(10)

//         //console.log("After Mocking", ApiService.validateEmail());
//        expect(ApiService.validateEmail(10)).toBe(10);
//        expect(ApiService.validateEmail).toHaveBeenCalledWith(10);
//     })
// })