import React from "react";
import { Link } from 'react-router-dom';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import './ContactCard.css';
import { NONE } from "browserify-zlib/lib/binding";

const ContactCard = (props) => {
  
  const {id, name, email} = props.contact; // instead of writing props.contact.x everytime

    return (
        <div className = "item">
          <div className="imgdiv">
              <img id = "profile" src = '/images/m.png' alt = "user" />
          </div>

            <div className = "content">
              <Link 
              // to = { {pathname : `/contact/${id}`, state : {contact : props.contact}} }
              to = {`/contact/${id}`} state = {{contact : props.contact}}
              style={{textDecoration: NONE}}
              >
              <div id = "name">{name}</div>
              <div id = 'email'>{email}</div>
              </Link>
            </div>

            <div className="icons" >
            <FaTrash className ='delete' onClick = {() => props.clickHandler(id)} /> 
            <Link to = {`/edit/${id}`} state = {{contact : props.contact}} >
              <FaPencilAlt className = 'edit' /> 
            </Link>
            </div>
        </div>
    );
}

export default ContactCard;