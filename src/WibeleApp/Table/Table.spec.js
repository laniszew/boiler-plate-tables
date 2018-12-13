import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

describe('Table', () => {
    it('should render', () => {
        const component = shallow(<Table />);
        const table = component.find('.ReactTable')
        expect(table).toBeTruthy();
    });
});
