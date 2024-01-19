import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './ContactDetails.css';

const ContactDetails = (props) => {
    const location = useLocation();
    // console.log(props);
    // console.log(location);
    // const {name, email} = props.state.contact;
    const {name, email , id} = location.state.contact;

    return (
        <div className = "main3">
            <div className = "main2">
                <div className = "i1">
                    <img className='i2' src = '/images/m.png' alt = "user" />
                </div>
                <div className = "contents">
                    <div className = "c1">Name : {name}</div>
                    <div className = "c2">Email : {email}</div>
                </div>
            </div>
            <div className="b2class">
             
                <Link to = "/list">
                    <button className = "b2">Back to Contact List</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetails;
