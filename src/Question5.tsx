import React, { useRef } from 'react';
const Question5: React.FC = () => {
    // Create a ref using the useRef hook
    const divRef = useRef<HTMLDivElement>(null);

    // Function to handle the button click and scroll to the div
    const handleButtonClick = () => {
        if (divRef.current) {
            // Scroll to the div using the scrollIntoView method
            divRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div style={{ height: '800px' }} className='bg-teal-700 text-center pt-10 text-white font-bold'>
            <pre className='text-3xl float-left'>Question 5</pre><br /><br></br>
            <div>
            In this task I have used useRef hook to scroll to another div
This is the Primary div which has button which onclick slides to another div
            </div>
                <button onClick={handleButtonClick} className='bg-blue-400 p-2 rounded-md border-2 text-2xl mt-7'>Scroll to next div</button>
            </div>
            {/* The div to scroll to */}
            <div ref={divRef} style={{ height: '500px' }} className='bg-yellow-600 text-center pt-10 text-white text-2xl font-bold'>
                    Screen is scrolled to this component.
            </div>
        </div>
    );
}

export default Question5;
