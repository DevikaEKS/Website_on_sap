import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../Components/nursing/call to action/contactform.css'
import axios from 'axios';

const AutoPopupModalgl = () => {
  const [showModal, setShowModal] = useState(false);

  // useEffect hook to show modal after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 8000); // 30 seconds in milliseconds

    // Cleanup function to clear timeout if component unmounts before 30 seconds
    return () => clearTimeout(timer);
  }, []);

  // Function to handle closing modal
  const handleClose = () => setShowModal(false);
  const [formData, setFormData] = useState({
    name:'',
    phonenumber:'',
    email:'',
    services:'',
    message:''
    // other form fields
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function handlesubmit(event){
    event.preventDefault()
    if(formData.name===''){
      alert("please fill the name")
    }
    else if(formData.phonenumber===''){
      alert("please fill the phone number")
    }
    else if(formData.email===''){
      alert("please fill the email")
    }
    else if(formData.services===''){
      alert("please select the services")
    }
  
    else{
      axios.post("http://kggeniuslabs.com:4000/dmform",formData)
      .then((res)=>{
        if(res.data.status==="inserted"){
            alert("Will Get Back You Soon...")
            window.location.reload()
        }
        else if(res.data.status==="error"){
            alert("Already register...")
        }
        else{
            alert("data are not Registed")
        }
    })
    }

 }
  return (
    <Modal show={showModal} onHide={handleClose} className='mt-5 zindexdm'>
      <Modal.Header closeButton>
        <Modal.Title className=''>Get touch with us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="container-fluid mt-n5">
            <form onSubmit={handlesubmit}>
            <div class="col-lg-12 mb-2">
                
                <input type="text" className="form-control mt-4" placeholder='Full name' required="true" name="name" id="name" onChange={handleChange}/>
            </div>
            
            <div class="mb-2">
                
                <input type="phone" className="form-control mt-4" required="true" placeholder='Phone number' name="phonenumber" id="phonenumber" onChange={handleChange}/>
            </div>
            
            <div class="mb-3">
                 
                <input type="email" className="form-control mt-4" required="true" name="email" placeholder='Email' id="email" onChange={handleChange}/>
            </div>
            <div class="input-box  mt-4 border p-2">
                        <select className="col-lg-12 " name='services'  id="services" onChange={handleChange}> 
                            <option>Select the services</option>
                            <option value="Manpower Consultancy">Manpower Consultancy</option>
                            <option value="It Services">It Services</option>
                        </select>
                     
                    </div>
                    <div class="input-box mb-4 mt-4">
                        <textarea placeholder="Message" className="border form-control" name='message' id="message" onChange={handleChange}></textarea>
                     
                    </div>
                    
                    <div class="input-box">
                      <input type="submit" value="Connect with us" className='btn btn-success' name=""/>
                    </div>
            </form>
        </div>
      </Modal.Body>
    
    </Modal>
  );
};

export default AutoPopupModalgl;