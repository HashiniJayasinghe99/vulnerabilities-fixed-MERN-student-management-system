import React from 'react'
import "./Supportserviceform.css";
import "./SupportService.css";
import sliitlogo from "../images/SupportServiceImages/sliit_logo.jpg";
import contact from "../images/SupportServiceImages/contact.gif";


const ContactDetails = () => {
  return (
    <div className='contact'>
      <div class="SupervisorSupportServices">
        <div class="StdSup">
          
          <h2 class="SuperServicesH2"> 🧑‍💻 Support Services</h2>
          <br />
          <h3><pre> 🌐 SLIIT Admin Support</pre></h3><br />
          <h4><pre>      https://Support.sliit.lk</pre></h4>
          <h3><pre> 📞 Hotline No</pre></h3><br />
          <h4><pre>      8.30 AM to 5.00 PM <br /></pre></h4>
          <h4><pre>      • 011 754 4801</pre></h4>
          <br></br>  <br></br>  <br></br>  <br></br>  
         
          <div className="contactImage">
          <img src={contact} /> 
          </div>
          <br></br><br></br><br></br><br></br><br></br>
          <div className="supmenuSliitlogo">
          <img src={sliitlogo} /> 
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default ContactDetails
