import { createStore } from 'redux';
// Define the initial state
const initialState = {
    counter: 0,
    countertwo:0
};
// Define the reducer function
const counterReducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'INCREMENTtwo':
            return { ...state, countertwo: state.countertwo + 5 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        case 'DECREMENTtwo':
            return { ...state, countertwo: state.countertwo - 5 };
        default:
            return state;
    }
};

// Create the store
const store = createStore(counterReducer);

export default store;

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
