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
        <div style={{height: '500px'}} className='text-center items-center mt-10'>
            <input type="text" value={inputValue} onChange={handleInputChange} className='border-2'/><br></br>
            <button onClick={handleButtonClick} className='bg-blue-500 text-white rounded-sm mt-2 p-3'>Send Data</button>
        </div>
    );
}
export default Question6Child;
