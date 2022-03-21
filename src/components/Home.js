import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {

 let navigate =useNavigate();
  return (
    <div>
        <h1>This is a Home Page</h1>
      <button onClick={()=>navigate("/todoshooks")}>Go to Todos</button>
    </div>
  );
}

export default Home;
