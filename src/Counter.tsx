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
        <div className='bg-gray-600 h-96 w-full items-center text-center flex pr-5 text-white font-semibold'>
            <Display count={count}/>
            <div><h1 className='text-2xl font-semibold'>Question 2</h1><br></br>For this task , i have used useEffect hook to update regarding the state value of count of this functional component.
        <span className='text-red-500'>The value of count is being stored in Redux store.</span>
        </div>
            <div className='flex flex-col justify-center'>
                Count: {count}
            <button onClick={increment} className='border-2 mb-2  text-xl font-semibold text-white p-2 float-right'>Increment</button>
            <button onClick={decrement} className='border-2 mb-2  text-xl font-semibold text-white p-2'>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;
