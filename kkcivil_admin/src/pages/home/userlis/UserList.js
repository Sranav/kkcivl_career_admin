import React from 'react'
import './UserList.css'

function UserList() {
  return (
    <div className='user_list'>
        <h3>User Job Creation</h3>
        <form action="" className='Job_creation'>
            <label htmlFor="" className='form_labels'>Job Name</label>
            <input type='text' placeholder='Job Name'/>
            <label htmlFor="" className='form_labels'>Job Description</label>
            <textarea name="textarea" id="" cols="30" rows="10"></textarea>
            <label htmlFor="" className='form_labels'>Location</label>
            <input type="text" />
            <button className='update_button'>Update</button>
        </form>
        
    </div>
  )
}

export default UserList