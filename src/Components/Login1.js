import React, { Component } from 'react'
import './SignUp.css'
import signup from './SignUp.css';
import {Link} from "react-router-dom"


export default class Login1 extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
        };
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleSubmit(e){
        e.preventDefault();
        const {email,password}=this.state;
        console.log(email,password)
        fetch("http://localhost:5000/login-user",{
            method:"POST",
            crossDomain:true,
            headers:{
              "Content-Type":"application/json",
              Accept:"application/json",
              "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
              email,
              password,
            }),
      
          })
          .then((res)=>res.json())
          .then((data)=>{
            console.log(data,"userInfo");
            if(data.status=="ok"){
              alert("login successful")
              window.localStorage.setItem("token",data.data);
              window.location.href="./UserDetails"
            }
            else{
              alert("user not found")
            }
          })
        
    }
    
  render() {
    return (
        <div className='container'>
        <p className='heading'>Login Up</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name='email' id='email' 
            onChange={(e)=>this.setState({email:e.target.value})}/>
          </div>
            <br />
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name='password' id='password'
            onChange={(e)=>this.setState({password:e.target.value})}/>
          </div>
          <button className='btn' type='submit'>Login</button>
          
          <Link to='./SignUp'>SignUp</Link>
        </form>
      </div>
    )
  }
}
