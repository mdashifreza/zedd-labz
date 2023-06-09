import React from 'react';

interface DisplayProps {
    count: number;
}
interface InputState {
    inputValue: string;
}
class Display extends React.Component<DisplayProps, InputState> {
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
            <div className='bg-blue-500 h-96 w-1/2 p-5 font-semibold text-black pt-20'> <h1 className='text-2xl font-semibold'>Question 1</h1><br></br> This is from Class Component.
                The value of count from question 2 part is<br></br>{count}<br></br>fetched from redux store
                Use of Class State in Class Component
                <div className='mt-7'>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={this.handleInputChange}
                        placeholder='Enter Text Here'
                        className='placeholder:p-2'
                    />
                    <p>{inputValue}</p>
                </div>
            </div>
        );
    }
}
export default Display;