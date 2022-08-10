import React from 'react'
import './UserList.css'

function UserList() {
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  return (
    
    <div className='user_list'>
        <h3 className="user_job_creation">User Job Creation</h3>
        <form action="" className='Job_creation' onSubmit={handleSubmit}>
            <label htmlFor="" className='form_labels'>Job Name</label>
            <input type='text' placeholder='Job Name'/>
            <label htmlFor="" className='form_labels'>Job Description</label>
            <textarea name="textarea" id="" cols="30" rows="10" placeholder='Job Description'></textarea>
            <label htmlFor="" className='form_labels'>Location</label>
            <input type="text" placeholder='Job Location'/>
            <button className='update_button'>Update</button>
        </form>
        
    </div>
  )
}

export default UserList