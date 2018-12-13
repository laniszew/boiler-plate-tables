import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

describe('Table', () => {
    it('should render', () => {
        const component = shallow(<Table />);
        const test = component.find('.ReactTable')
        expect(test).toBeTruthy();
    });
});
