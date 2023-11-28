import React, { useEffect, useState } from 'react';
import './Edit.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Edit = () => {

 const {id}=useParams()
 const navigate=useNavigate()
  let Photo=""
  const [val,setval]=useState({
     
    Name:"",
    Email:"",
    Empid:"",
    Phone:"",
    Address:"",
    Salary:"",
    Designation:"",
    Photo:""
  })

  // Add Data/get data from input
    const getDatas=async()=>{
      const res=await axios.post(`http://localhost:3001/api/getdetails/${id}`)
    console.log(res.data);
    if(res.status==200){
        setval(res.data)
    }
}
    useEffect(()=>{
        getDatas();
    },[])
    console.log("sgs",val);


    
    // Add Data/get data from input
    const getData=(e)=>{
      e.preventDefault();
      // console.log(val);
      setval((pre)=>({...pre,[e.target.name]:e.target.value}))
    }
        
      // convert image

      function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
    
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
      // upload image
      const upload=async(e)=>{
        Photo= await convertToBase64(e.target.files[0])
        
      }

      const editEmploye=async(e)=>{
        e.preventDefault();
        const res=await axios.patch(`http://localhost:3001/api/editemp/${id}`,{...val,Photo:Photo})
        if(res.status!=200){
         
          alert("data not editted")
        }
        else{
          alert("Data editted successfully")
          navigate("/")
        }
     }
     
 
    
  return (
    <div className="container emp-profile">
      <form method="post" onSubmit={editEmploye}>
        <div className="row data">
          <div className="col-md-8 details">
          <label htmlFor="name">Name :</label>
            <input type="text" id="name" name="Name" value={val.Name} onChange={getData} placeholder="Enter your name" />
            <br></br>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="Email" value={val.Email}  onChange={getData} placeholder="Enter your email" />
            <br></br>
            <label htmlFor="empId">Emp Id :</label>
            <input type="text" id="empId" name="Empid" value={val.Empid}  onChange={getData} placeholder="Enter your employee ID" />
            <br></br>
            <label htmlFor="phone">Phone :</label>
            <input type="text" id="phone" name="Phone" value={val.Phone}  onChange={getData} placeholder="Enter your phone number" />
                  <br></br>
                  <label htmlFor="address">Address :</label>
            <input type="text" id="address" name="Address" value={val.Address}  onChange={getData} placeholder="Enter your address" />
            <br />
           
            <label htmlFor="salary">Salary :</label>
            <input type="text" id="salary" name="Salary" value={val.Salary}  onChange={getData}  placeholder="Enter your salary" />
                  <br></br>
                  <label htmlFor="designation">Designation :</label>
            <input type="text" id="designation" name="Designation"  value={val.Designation}  onChange={getData}  placeholder="Enter your designation" />
            <br></br>

            
             <div className='Sumbtn'><button  >Register</button></div>
          </div>
          <div className="col-md-4 ">
          <div className="profile-img">
              <img
                src={val.Photo}
                alt=""
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" onChange={upload} />
              </div>
            </div> 
            <div className='Regi-text'></div>   </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
