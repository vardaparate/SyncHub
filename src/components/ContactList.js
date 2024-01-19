import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import ContactCard from "./ContactCard";
import { FaSearch } from 'react-icons/fa';
import './ContactList.css';

const ContactList = (props) => {

    const inputs = useRef("");

    const getSearchTerm = () => {
      // console.log(inputs.current.value);
      props.searchKey(inputs.current.value);
    }

    const deleteContactHandler = (id) => {
      props.getContactId(id); 
    };

    const renderConatactList = props.contacts.map((contact) => {
        return (
          <ContactCard contact = {contact} clickHandler = {deleteContactHandler} key = {contact.id} />
        );
      });
     
    return (
      <div className="outside" >
      <div className = "main">  

          <div className = "heading">
            Contact List 
          </div>
          <div className = "search">
            <span className = "input">
              <input className = "prompt" type = "text" placeholder="Search Contacts" 
                value = {props.term}
                ref = {inputs}
                onChange = {getSearchTerm}
                // onChange = {(e) => {e.target.value}}
              />
              <FaSearch className="fa-search"/>
            </span>
            <Link to = "/add">
              <button className = "b1">Add Contact</button>
            </Link>
          </div>
        <div className = "list">
          { renderConatactList.length > 0 ? renderConatactList : "No Contacts Available" }
        </div>
      </div>
      </div>
    );
}

export default ContactList;