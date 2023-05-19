import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
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
      <Question5 />
      <div>
        <p>{data}</p>
        <Question6Child onDataReceived = { handleDataReceived } />
      </div>
    </Provider>
  );
};
export default App;
