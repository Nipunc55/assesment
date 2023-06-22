import  { useState } from 'react';
import { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { updateCustomer } from '../functions/api';

export default function PopUp(props) {
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');

 useEffect(() => {
    if (props.selectedCustomer !== null) {
      setSelectedCustomer(props.selectedCustomer);
      setName(props.selectedCustomer.name);
      setAge(props.selectedCustomer.age);
      setAddress(props.selectedCustomer.address);
      setBirthday(props.selectedCustomer.birthday);
    }
  }, [props.selectedCustomer]);

async function saveCustomer(){

    
    const customer={name,address,birthday,age}
    updateCustomer(selectedCustomer._id,customer).then((response) => {
        console.log(response);
        if(response.status===201){
        alert('Customer Added Successfully')
       props.GetCustomers()
    }
     }).catch((error) => {console.log(error)})
}

    
  return (
      <>
        
      <Modal show={selectedCustomer !== null} onHide={() => setSelectedCustomer(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCustomer && (
              <form>
              <div className="form-group">
                <label htmlFor="nameInput">Name</label>
                <input
                  className="form-control"
                  id="nameInput"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ageInput">Age</label>
                <input
                  className="form-control"
                  id="ageInput"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="addressInput">Address</label>
                <input
                  className="form-control"
                  id="addressInput"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="birthdayInput">Birthday</label>
                <input
                  className="form-control"
                  id="birthdayInput"
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </div>
            </form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={saveCustomer}>
            Save
          </Button>
          <Button variant="secondary" onClick={() => setSelectedCustomer(null)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}
