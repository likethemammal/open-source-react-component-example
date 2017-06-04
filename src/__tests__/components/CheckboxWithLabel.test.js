import React from 'react';
import {shallow} from 'enzyme';

import toJSON from 'enzyme-to-json'


import CheckboxWithLabel from '../../components/CheckboxWithLabel';

describe('CheckboxWithLabel', () => {
    // Render a checkbox with label in the document
    const component = shallow(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
    )

    test(`Snapshot should match`, () => {
        expect(toJSON(component)).toMatchSnapshot()
    })

    test('changes the text after click', () => {

        expect(component.text()).toEqual('Off');

        component.find('input').simulate('change');

        expect(component.text()).toEqual('On');
    })
})