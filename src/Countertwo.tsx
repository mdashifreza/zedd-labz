import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Displaytwo from './Displaytwo';
import { RootState } from './store';
const Countertwo: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter);
    const counttwo = useSelector((state: RootState) => state.countertwo);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENTtwo' });
    };
    const decrement = () => {
        dispatch({ type: 'DECREMENTtwo' });
    };

    return (
        <div className='bg-green-950 h-96 w-full items-center text-center flex pr-5 text-white font-semibold'>
            <Displaytwo count={count}/>
            <div><h1 className='text-2xl font-semibold'>Question 4</h1><br></br>
        <span className='text-red-500'>Context Value into component 2: This is content from Context Provider</span>
        </div>
            <div className='flex flex-col justify-center'>
                Count: {counttwo}
            <button onClick={increment} className='border-2 mb-2  text-xl font-semibold text-white p-2 float-right'>Increment</button>
            <div className='font-bold'>
            <pre>Name : John Doe</pre>
            <pre>Age : 25</pre>
            </div>
            <button onClick={decrement} className='border-2 mb-2  text-xl font-semibold text-white p-2'>Decrement</button>
            </div>
        </div>
    );
};
export default Countertwo;
