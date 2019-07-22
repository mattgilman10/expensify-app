import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';
// react-test-renderer

test("Should render Not Found page correctly", () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});
