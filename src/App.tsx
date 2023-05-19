import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import Countertwo from './Countertwo';
import Question5 from './Question5';
import Question6Child from './Question6Child';
import store from './store';
//
interface ParentComponentProps {
  // Define a callback function to receive the data
  onDataReceived: (data: string) => void;
}
const App: React.FC = () => {
  const [data,setData] = useState("");
  const handleDataReceived = (data: string) => {
    // Do something with the data in the parent component
    setData(data);
    console.log(data);
  };
  return (
    <Provider store={store}>
      <Counter />
      <Countertwo/>
      <Question5 />
      <div className='bg-teal-200 '>
        <Question6Child onDataReceived = { handleDataReceived }/>
        <p className='pb-16 font-semibold'>This is parent Component
You have entered: <span className='text-orange-500 font-extrabold text-2xl'> {data} </span> in child component</p>
      </div>
    </Provider>
  );
};
export default App;
