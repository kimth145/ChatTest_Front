import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [name, setName] = useState("")

  useEffect(()=>{
    // fetch('http://localhost:3001/get_age/hong/B')
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log("fetchData : ", data);
    //   // setTodoList(data);
    // });

    fetch('https://server-test-u1jd.onrender.com/get_name/')
    .then(res => res.json())
    .then(data => {
      console.log(data.aa)
        // setPosts(data)
    })

  },[])

  return (
    <div className="App">
      <div>{name}</div>
      <button onClick={()=>setName("Kimth")}>Login</button>
    </div>
  );
}

export default App;
