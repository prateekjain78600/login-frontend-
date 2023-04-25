import React, { Component } from 'react'

export default class UserDetails extends Component {
    componentDidMount(){
        fetch("http://localhost:5000/userdata",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token:window.localStorage.getItem("token"),
      }),

    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userdata")
    })
    }
  render() {
    return (
      <div>
        Name <h1>Prateek</h1>
        Email <h1>prateek@20gmail.com</h1>
      </div>
    )
  }
}
