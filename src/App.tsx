import React, {useState} from 'react';
import './App.css';
import Test from "./test/Test";
const App:React.FC = () => {

    const [testData, setTest] = useState<number>(0)
    const typeTest: string[] = ['a', 'b']
    const onChange = (data: number) => {
        setTest(data)
    }
    return (
        <div className="App">
            <Test/>
            <input type="text"/>
        </div>
    );
}

export default App;
