import axios from 'axios';
import {useState,useEffect} from 'react' ;
const DataFetch =() =>{
    const [todos,setTodos] = useState([]);
    const [comments,setComments] = useState([]);
    useEffect(() => {
        
    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(resp =>resp.json())
    .then(resp => setTodos(resp))
    .catch(err =>{console.log(err)})
    
    },[]);
    useEffect(() => {        
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(resp => setComments(resp.data))
        .catch(err =>{console.log(err)})
        
        },[]);

    return(
        <div>
            {
              
                todos.map((item,index) =>{
                    return <div key={index}>{item.title}</div>
                })
               
            }

            <br/><br/>

            <div>
            {
              
                comments.map((item,index) =>{
                    return <div key={index}>{item.email}</div>
                })
               
            }
            </div>
        </div>

        
    )
       
}
export default DataFetch;
