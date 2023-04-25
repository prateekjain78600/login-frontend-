import React, { Component } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
export default class signup extends Component {
  constructor(props){
    super(props)
      this.state={
        fname:"",
        email:"",
        phone:"",
        password:""
      }
      this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const{fname,email,phone,password}=this.state;
    console.log(fname,email,phone,password );
    fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fname,
        email,
        phone,
        password,
      }),

    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userInfo")
    })
  }
  render() {
    return (
      <div className='container'>
      <p className='heading'>Sign Up</p>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">FullName</label>
          <br />
          <input type="text" name='username' id='username'
          onChange={(e)=>this.setState({fname:e.target.value})} />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name='email' id='email' 
          onChange={(e)=>this.setState({email:e.target.value})}/>
        </div>
        <br />
        <div>
          <label htmlFor="phone">Phone</label>
          <br />
          <input type="text" name='phone' id='phone' 
          onChange={(e)=>this.setState({phone:e.target.value})}/>
        </div>
          <br />
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name='password' id='password'
          onChange={(e)=>this.setState({password:e.target.value})} />
        </div>
        <button className='btn' type='submit'>Register</button>
        <Link to='/'>Login</Link>
      </form>
    </div>
    )
  }
}
