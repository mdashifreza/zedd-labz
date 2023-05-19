import React from 'react';

interface DisplayProps {
    count: number;
}
interface InputState {
    inputValue: string;
}

class Display extends React.Component<DisplayProps,InputState> {
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
            <div className='bg-blue-500 h-48 w-1/2 p-5 font-semibold text-white'> Question 1 This is from Class Component.
            The value of count from question 2 part is<br></br>{count}<br></br>fetched from redux store
Use of Class State in Class Component
            <div>
            <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
          placeholder='Enter Text Above'
        />
        <p>{inputValue}</p>
            </div>
            </div>
        );
    }
}
export default Display;
