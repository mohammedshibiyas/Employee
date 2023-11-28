import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import axios from 'axios';
const Home = () => {
  const [getEmp,setEmp]=useState([])
  const getEmployee=async()=>{
   const res= await axios.get("http://localhost:3001/api/gettask")
    setEmp(res.data)
  }
  getEmployee()

  const deleteEmp =async(id)=>{
    const confirm=window.confirm("Are you sure?")

      if(confirm){
        try {
          const res=await axios.delete(`http://localhost:3001/api/deltask/${id}`)
          console.log("data deleted",res.data);
        } catch (error) {
          console.log("data not deleted",error);
        }
        getEmployee()
      }
      else{
        console.log("deletion canceled");
      }
  }
  return (
    <div>
           <table className='tablemain'>
    <thead>
      <tr>
        <th className='id'>User ID</th>
        <th className='username'>Username</th>
        <th className='action'>Action</th>
      </tr>
    </thead>
    <tbody>
    {
      getEmp.map((data,index)=>
      <tr key={index}>
      <td>{data.Empid}</td>
      <td>{data.Name}</td>
      <td>
       <Link to={`/view/${data._id}`}> <button class="view-btn"><FaEye /></button></Link>
      
        <button class="delete-btn"><MdEdit /></button>
        <Link to={`#${data._id}`} onClick={()=> deleteEmp(data._id)}><button class="edit-btn"><MdDelete /></button></Link>
      </td>
    </tr>
      )
    }

     
    
    </tbody>
  </table>
    </div>
  )
 
}

export default Home
