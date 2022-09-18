import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import deleteicon from '../img/delete.png'
import {useTheme} from '../context/ThemeContext';

import Modal from './Modal'
import axios from 'axios'
const Todos = () => {
  const data=useTheme()
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState('')
  const [edit,setEdit]=useState('')
  const navigate=useNavigate()
  const handleEdit=(id)=>{
    axios({
      method:'put',
      url:`https://6322bf32a624bced307dbe25.mockapi.io/todos/${id}`,
      data:{
        content:edit,
      }
    }).then(function(response){
      console.log(response)
      getTodos()
      return true;

    }).catch(function(error){
      console.log(error)
    })
  }
  const getTodos=()=>{
    axios.get(`https://6322bf32a624bced307dbe25.mockapi.io/todos?username=${localStorage.getItem('username')}`)
    .then((res)=>setTodos(res.data))
    .catch((err)=>console.log(err))
  }
  useEffect(()=>{
    // if(!localStorage.getItem('username')){
    //   navigate('/')
    // }
  
    getTodos()
  },[])
  return (
    <div className={`${data.theme} todo-page`}>
      <h1 className='baslik'>Hoşgeldin {localStorage.getItem('username')}</h1>
      <div className='add-todo'>
      <input
      value={todo}
      onChange={(e)=>{setTodo(e.target.value)}} 
      />
      <button

      onClick={()=>{
        if(todo.length<3){
          alert('Todo alanı 3 karakterden büyük olmalı..')
        }
        else{
            axios.post('https://6322bf32a624bced307dbe25.mockapi.io/todos',{
            username:localStorage.getItem('username'),
            content:todo

              })
              .then((res)=>console.log(res.data))
              .catch((err)=>console.log(err))
              .finally(()=>{
                setTodo('')
                getTodos()
              }
            )

            }
      }}
      >EKLE</button>
      </div>
      <div className='mt-1'>
        
     {
      todos.length > 0 ? todos.map((todo)=>{
        return(



        <div style={{backgroundColor:'white'}} className='todos' key={todo.id}>
          <div>
          <h2 
          className='todos-l'
          style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none', opacity: todo.isCompleted? '0.4' : '1' }}
          onClick={()=>{
            axios({
              method:'put',
              url:`https://6322bf32a624bced307dbe25.mockapi.io/todos/${todo.id}`,
              data:{
                isCompleted: !todo.isCompleted,
              }
            }).then(function(response){
              console.log(response)
              getTodos()
            }).catch(function(error){
              console.log(error)
            })
          }}
          >{todo.content}</h2>
          </div>
          <div style={{display:'flex'}}>
          <Modal>
        <form>
          <div style={{display:'flex',flexDirection:'column'}}>
            <input 
            type="text" 
            defaultValue={todo.content}
            onChange={(e)=>{setEdit(e.target.value)}}
            style={{padding:'5px', marginBottom:'10px', border:'1px solid black'}}
            ></input>
            <button
            style={{
                margin:'5px 0px'
            }}
            onClick={async(e)=>{
              e.preventDefault()
              if(edit.length<3){
                alert('Todolarınız 3 karakterden kısa olamaz..')
              }
              else{
                handleEdit(todo.id)
              }
              
           }}
            >
              Kaydet
            </button>
  
          </div>
        </form>
      </Modal>
         <img
         alt='delete'
         src={deleteicon}
         onClick={()=>{
          axios({
            method:'delete',
            url:`https://6322bf32a624bced307dbe25.mockapi.io/todos/${todo.id}`
          }).then(function(response){
            console.log(response)
            getTodos()
          }).catch(function(error){
            console.log(error)
          })
           }} 
         />

       
     


          </div>  
          
        </div>




        )
      }) : <h2 className='mt-1 white'>Henüz hiç todo eklemedin..</h2>
      
     }
      </div>
      <div>

      <button onClick={()=>{
        data.theme==='light' ? data.setTheme('dark' ) : data.setTheme('light')
      }}>{localStorage.getItem('theme')} Tema</button>
      <button
      onClick={()=>{
        localStorage.clear()
        navigate('/')
      }}
      >Çıkış yap</button>
      </div>
      
    </div>
  )
}

export default Todos