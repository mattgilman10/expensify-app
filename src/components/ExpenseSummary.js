import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

// my version
// export const ExpenseSummary = ({expenseCount, expensesTotal}) => (
//     <div>
//         {
//             props.expenses.length === 1 ? (
//                 <p>Viewing 1 expense totalling {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')} </p>
//             ) : (
//                 <p>Viewing {props.expenses.length} expenses totalling {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')} </p>
//             )
//         }
//     </div>
// );


export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    );
};



const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};
export default connect(mapStateToProps)(ExpenseSummary);
