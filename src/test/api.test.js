import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import ApiService from '../services/api';

// jest.mock('../services/api');

configure({adapter : new Adapter()});

describe('Mocking the API Service Module', () => {
    // test('Checking validate method by Mock', ()=> {
    //     const result = ApiService.validateEmail();
    //     expect(ApiService.validateEmail).toHaveBeenCalled();
    //     expect(ApiService.validateEmail).toHaveBeenCalledWith();
    // });

    test('Checking validate method by SpyOn',() => {
        const mock = jest.spyOn(ApiService, 'validateEmail');
        mock.mockImplementation(() => 1000)

        expect(ApiService.validateEmail(1000)).toEqual(1000)
        expect(mock).toHaveBeenCalledWith(1000);

        mock.mockRestore()

        expect(ApiService.validateEmail('kgmail.com')).toEqual(false);

    })

    test("Test real time API", async() => {
        const url = "https://reqres.in/api/users?page=2";
        let response = await ApiService.getAPI(url);
        expect(response.data.length).toEqual(6)
    })
});