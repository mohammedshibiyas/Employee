import React from 'react'
import './View.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const View = () => {
  const {id}=useParams()
  console.log(id);
  const [getview,setview]=useState([])
  const getViewer=async(id)=>{
  try {
    const res= await axios.post(`http://localhost:3001/api/getdetails/${id}`)
    console.log(res);
    setview(res.data)
    console.log(res.data);
    console.log(setview);
  } catch (error) {
    console.log(error);
  }
  }
 useEffect(()=>{
  getViewer(id)
 },[id])
  return (
    <div>
      <h2 id='emp'>Employee Profile</h2>
       <div className="container emp-profile">
      <form method="post">
        {/* <div className="row data">
          <div className="col-md-8 details">
          <label htmlFor="name">Name :</label>
           <span id='name'>hello</span>
            <br></br>
            <label htmlFor="email">Email :</label>
            <span id='email'>Email</span>
            <br></br>
            <label htmlFor="empId">Emp Id :</label>
            <span id='empid'>empid</span>
            <br></br>
            <label htmlFor="phone">Phone :</label>
            <span id='phone'>Phone</span>
                  <br></br>
                  <label htmlFor="address">Address :</label>
                  <span id='address'>address</span>
            <br />
           
            <label htmlFor="salary">Salary :</label>
            <span id='salary'>salary</span>
                  <br></br>
                  <label htmlFor="designation">Designation :</label>
                  <span id='address'>address</span>
            <br></br>

            
             {/* <div className='Sumbtn'><button >Register</button></div> */}
          {/* </div>
          <div className="col-md-4 ">
          <div className="profile-img">
              <img
                src="../public/download.png"
                alt=""
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file"/>
              </div>
            </div> 
            <div className='Regi-text'></div>   </div>
        </div> */} 

        
         
          <div className="row data">
          <div className="col-md-8 details">
          <label htmlFor="name">Name :</label>
           <span id='name'>{getview.Name}</span>
            <br></br>
            <label htmlFor="email">Email :</label>
            <span id='email'>{getview.Email}</span>
            <br></br>
            <label htmlFor="empId">Emp Id :</label>
            <span id='empid'>{getview.Empid}</span>
            <br></br>
            <label htmlFor="phone">Phone :</label>
            <span id='phone'>{getview.Phone}</span>
                  <br></br>
                  <label htmlFor="address">Address :</label>
                  <span id='address'>{getview.Address}</span>
            <br />
           
            <label htmlFor="salary">Salary :</label>
            <span id='salary'>{getview.Salary}</span>
                  <br></br>
                  <label htmlFor="designation">Designation :</label>
                  <span id='designation'>{getview.Designation}</span>
            <br></br>

            
             {/* <div className='Sumbtn'><button >Register</button></div> */}
          </div>
          <div className="col-md-4 ">
          <div className="profile-img">
              <img
                src={getview.Photo}
                alt=""
              />
              {/* <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file"/>
              </div> */}
            </div> 
            <div className='Regi-text'></div>   </div>
        </div>
          
        
      </form>
    </div>
    </div>
  )
}

export default View
