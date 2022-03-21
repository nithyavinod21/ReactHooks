import React ,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; 

import axios from 'axios';

export default function TodosHooks() {
  
    const [todos,setTodos] =useState([]);  
    
    const navigate = useNavigate();

    useEffect(
        () => {
            axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(resp =>setTodos(resp.data))
            .catch(err=>{
                console.log(err)
            })        
        }, []
    )

  return (
    <div> 
        <button onClick={()=>{navigate("/products") }}>Products List</button>
      {
          todos.map((item,index)=>{
              return(
                  <div key={index}>{item.title}</div>
              )
          })
      }
    </div>
  );
}
