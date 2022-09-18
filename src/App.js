import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import axios from 'axios'
// import { useEffect } from 'react';
import Login from './components/Login';
import Todos from './components/Todos';
import {ThemeProvider} from './context/ThemeContext'

function App() {
  // useEffect(()=>{
  //   axios.get('https://6322bf32a624bced307dbe25.mockapi.io/todos?username=asd')
  //   .then((res)=>console.log(res.data))
  //   .catch((err)=>console.log(err))
  //   // axios.post('https://6322bf32a624bced307dbe25.mockapi.io/todos',{
  //   //   username:'deneme'
  //   // })
  //   // .then((res)=>console.log(res.data))
  //   // .catch((err)=>console.log(err))

  // })
  return (
    <div className="App">
      <ThemeProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/todos" element={<Todos></Todos>} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      
      
    </div>
  );
}

export default App;
