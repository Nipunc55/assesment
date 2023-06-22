import { useState,useEffect } from 'react'

import { getCustomers,getCustomer,insertCustomer,deleteCustomer } from '../functions/api'
import PopUp from './PopUp';
function CustomerTable() {
  const [customerList, setCotomerList] = useState(null)
  const [selectedCustomer, setSelectedCustomer] = useState(null);


async function addCustomer(){
  const name = document.getElementById('nameInput').value;
  const address = document.getElementById('addressInput').value;
  const birthday = document.getElementById('birthdayInput').value;
  const age = document.getElementById('ageInput').value;

  const customer={name,address,birthday,age}
  insertCustomer(customer).then((response) => {
    console.log(response);
    if(response.status===201){
      alert('Customer Added Successfully')
      GetCustomers()}
   }).catch((error) => {console.log(error)})
}

 async function GetCustomers(){
   getCustomers().then((response) => {
    console.log(response);
   if(response.status ==200) setCotomerList(response.data)

   }).catch((error) => {console.log(error)})
  }
async function DeleteCustomer(id){
  deleteCustomer(id).then((response) => {
    console.log(response);
    if(response.status===201){
      alert('Customer Deleted Successfully')
      GetCustomers()}
   }).catch((error) => {console.log(error)})

}
useEffect(() => {
 GetCustomers()
}, [])

  return (
    <>
     <PopUp selectedCustomer={selectedCustomer} GetCustomers={GetCustomers} />
        <table className="border table table-border table-striped table-hover">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
             <th>Customer Age</th>
              <th>Customer Address</th>
              <th>Customer Birthday</th>
              </tr>

          </thead>
          <tbody>
            {customerList !== null ?(customerList.map((customer,index) => (

              <tr key={customer._id}>
                <td>{index}</td>
                <td>{customer.name}</td>
                <td>{customer.age}</td>
                <td>{customer.address}</td>
                <td>{customer.birthday}</td>
                <td>
                  <button className="btn btn-primary" onClick={() =>setSelectedCustomer(customer)}>Edit</button>
                  </td>
                  <td>
                  <button className="btn btn-danger" onClick={() => DeleteCustomer(customer._id)}>Delete</button>
                  </td>
              </tr>
            ))) :(            
              null
              )}
               <tr>
                <td>--</td>
                <td><input className='bg-white text-dark' id='nameInput' type='string'></input></td>
                <td><input className='bg-white text-dark' id='ageInput' type='number'></input></td>
                <td><input className='bg-white text-dark' id='addressInput' type='string'></input></td>
                <td><input className='bg-white text-dark' id='birthdayInput' type='date'></input></td>
                
               <td>
              <button type='submit' className="btn btn-success" onClick={()=>addCustomer()}>Add</button>
              </td>
              </tr>
          </tbody>
        </table>

    </>
  )
}

export default CustomerTable
