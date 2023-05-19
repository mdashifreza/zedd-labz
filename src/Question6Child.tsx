// ChildComponent.tsx
import React, { useState } from 'react';

interface ChildComponentProps {
    // Define a callback function to pass the data to the parent component
    onDataReceived: (data: string) => void;
}

const Question6Child: React.FC<ChildComponentProps> = ({ onDataReceived }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        // Pass the input value to the parent component
        onDataReceived(inputValue);
    };

    return (
        <div style={{height: '300px'}} className='text-center items-center bg-teal-200 p-10'>
            <p className='float-left text-3xl font-bold'>Question 6</p>
            <p className=' text-xl font-bold'>I am sending input data from child component into parent component by using state variable</p>
            <div className='items-center text-center'>
            <input type="text" value={inputValue} onChange={handleInputChange} className='border-2 p-2 mt-5'/><br></br>
            <button onClick={handleButtonClick} className='border-2 border-white font-extrabold text-xl mt-5 text-white rounded-sm mt-2 p-3'>Submit</button>
            </div>
        </div>
    );
}
export default Question6Child;
