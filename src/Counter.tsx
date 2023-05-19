import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Display from './Display';
import { RootState } from './store';
const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };
    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div className='bg-gray-600 h-48 w-full items-center text-center flex'>
            <Display count={count}/>
            <div className='flex flex-col justify-between'>
                {count}
            <button onClick={increment} className='bg-blue-500 text-xl font-semibold text-white p-2'>Increment</button>
            <button onClick={decrement} className='bg-blue-500 text-xl font-semibold text-white p-2'>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;
