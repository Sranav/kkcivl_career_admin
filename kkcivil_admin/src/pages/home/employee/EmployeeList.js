import React from 'react'
import './EmployeeList.css'

function EmployeeList() {
  return (
    <div className='employee_list'>Employee List
    <table className="widget_table">
        <tr className="widget_tr">
          <th className="widget_th">Name</th>
          <th className="widget_th">Phone Number</th>
          <th className="widget_th">Email</th>
          <th className="widget_th">Years of Experience</th>
          <th className="widget_th"> Upload resume</th>
        </tr>
        <tr className="widget_tr">
          <td className="widget__user">
         
          <span className="widget__name">Sranav</span>
          </td>
          <td className="widget_date">1234567890</td>
          <td className="widget_amount">sra@gmail.com</td>
          <td className="widget_amount">2</td>
          <td className="widget_amount"></td>
          
        </tr>
        <tr className="widget_tr">
          <td className="widget__user">
         
          <span className="widget__name">Sranav</span>
          </td>
          <td className="widget_date">1234567890</td>
          <td className="widget_amount">sra@gmail.com</td>
          <td className="widget_amount">2</td>
          <td className="widget_amount"></td>
         
        </tr>
        <tr className="widget_tr">
          <td className="widget__user">
         
          <span className="widget__name">Sranav</span>
          </td>
          <td className="widget_date">1234567890</td>
          <td className="widget_amount">sra@gmail.com</td>
          <td className="widget_amount">2</td>
          <td className="widget_amount"></td>
        </tr>
        <tr className="widget_tr">
          <td className="widget__user">
          
          <span className="widget__name">Sranav</span>
          </td>
          <td className="widget_date">1234567890</td>
          <td className="widget_amount">sra@gmail.com</td>
          <td className="widget_amount">2</td>
          <td className="widget_amount"></td>
         
        </tr>
      </table>
    </div>
    
  )
}

export default EmployeeList