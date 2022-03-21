import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import TodosHooks from './components/TodosHooks';

import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import { Products } from './components/Products';

function App() {

  const initialState =0;
  const [count, setCount] = useState(initialState);
  const [numbers ,setNumbers] =useState([]);
  
  const multiplyCount =() =>{
    setCount(previousCount => {
      debugger
      console.log(previousCount + "Previous Count value")
      return previousCount * 2;
    })
  }

  const setArray = () =>{
    setNumbers([...numbers,
     {
       id:numbers.length,
       value:Math.round(Math.random()*1000)
     } 
    ])
    debugger
    console.log("Numbers Count" + numbers);
  }

  useEffect(
    () => document.title=`Count:${count}`
  )
  return (
    <div className="App">
      <header>
        <h1>Learn React Hooks </h1>
        <h4>Value of Count :{count}</h4>
     </header>
     <button onClick ={()=>setCount(count+1)} >Increase Count</button>
     <button onClick ={()=>setCount(count-1)} >Decrease Count</button>
     <button onClick={multiplyCount} >Multiply Num</button>

     <button onClick={setArray}>Add Number</button>
      <br/><br/>

      {
        numbers.map((item,index) =>{
          return(
            <div key={index}>{item.value}</div>
          )
        })
      }

      <br/><br/><br/>
   
    <Router>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/todoshooks" element={<TodosHooks/>} />
      </Routes>

    </Router>
    </div>

  );
}

export default App;
