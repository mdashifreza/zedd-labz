import React from 'react';

interface DisplayProps {
    count: number;
}
interface InputState {
    inputValue: string;
}
class Displaytwo extends React.Component<DisplayProps, InputState> {
    constructor(props: DisplayProps) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: event.target.value });
    };
    render() {
        const { count } = this.props;
        const { inputValue } = this.state;
        return (
            <div className='bg-orange-500 h-96 w-1/2 p-5 font-semibold text-black pt-20'> <h1 className='text-2xl font-semibold'>Question 3</h1><br></br> This is from Class Component.
                In this task I have used useState, useEffect, useCallback,useContext which are major hooks of react.<br></br>{count}<br></br>Context Value into component 1: This is content from Context Provider
                <div className='mt-7'>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={this.handleInputChange}
                        placeholder='Enter Text Here'
                        className='rounded-sm placeholder:p-2'
                    />
                    <p>{inputValue}</p>
                </div>
            </div>
        );
    }
}
export default Displaytwo;