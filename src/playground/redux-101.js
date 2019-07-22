import { createStore } from 'redux';

// action generators - functions that return action objects


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count }) => ({
    type: 'SET',
    count
});

const ResetCount = () => ({
    type: 'RESET',
    count: 0
});

// reducers
// 1. Reducers are pure functions (outputs determined by inputs)
// 2. never change state or action

const countReducer = (state= {count: 0}, action) => {
    switch (action.type){
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'RESET':
            return {count: 0 };
        case 'SET':
            return {count: action.count};
        defualt:
            return state;
    }
    console.log("running");
    return state;
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



//Actions - object that gets sent to the store

// incrememnt, decrement, reset

// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());
// unsubscribe();


store.dispatch(ResetCount());


store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 11}));

store.dispatch(setCount({count: 25}));
