import './Contacts.scss'
import React, { Fragment, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar2 from '../navbar/Navbar2';

import lk from '../../images/5296501_linkedin_network_linkedin logo_icon.png';
import gr from '../../images/5296765_camera_instagram_instagram logo_icon.png';

import './Contact.css'
  

  


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Fragment>
      <Navbar2 />
      <div className="pcon">
      <div className="StyledContactForm" id="contacts">
        <div className="yi">
          <div className="rotator">
            <span>
              Contact <br />
              Join <br />
            </span>
          </div>
          
        </div>
         <p className='us'>US!</p>   
          

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="yit" type="submit" value="Send" />
        </form>
      </div>
      <div className="socialm">
        <ul className='soit'>
         <li><a href="https://www.linkedin.com/in/emily-ilva-8b5a74292"><img alt="linkedIn" className="sz" src={lk} /></a></li>
         <li><a href="https://www.instagram.com/"><img alt="instagram" className="sz" src={gr} /></a></li>
        
        </ul>
      </div>
      
      </div>
    </Fragment>
  );
};

export default Contact;


