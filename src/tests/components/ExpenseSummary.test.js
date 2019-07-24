import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test("should render ExpenseSummary with multiple expenses", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should render expense list with singular expense", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={23559290}/>);
    expect(wrapper).toMatchSnapshot();
});