import {useState, useEffect} from 'react'
import login from '../img/login.png'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const [username,setUsername]=useState('')
    const navigate=useNavigate()
    useEffect(()=>{
      if(localStorage.getItem('username')){
        navigate('/todos')
      }
    })
  return (
    
    <div className='login'>
     

      <div className='baslik'><h1>YAPILACAKLAR LİSTESİ</h1></div>  
      <h2> **Kullanıcı adını gir ve Hemen Başla** </h2>
      <div style={{display:'flex'}}>
      <input 
      maxLength='15' 
      minLength='3' 
      type='text' 
      placeholder='Kullanıcı adı'
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
       />
      <Link to='/todos'>
      <img 
      alt='Giris Yap' 
      style={{width:'50px', marginLeft:'5px'}} 
      src={login}
      onClick={(e)=>{
        if(username.length<5){
          e.preventDefault()
          alert('Kullanıcı adı 5 karakterden büyük olmalı')
        }else{
          console.log(username)
          localStorage.setItem('username', username)
        }
       
      }
      }
       />   
      </Link>
         
      </div>
    
     
    </div>
  )
}

export default Login

