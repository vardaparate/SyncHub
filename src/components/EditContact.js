import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate, withRouter } from "react-router-dom";
import './AddContact.css';

// class EditContact extends React.Component{
const EditContact = (props) => {
    
    // constructor(props) {
    //     super(props);
    //     // console.log(this.props);
    //     // const {id, name, email} = this.props.state.contact;
    //     this.state = {
    //         id : id,
    //         name : name,
    //         email : email
    //     };
    // }

    const location = useLocation();
    const navigate = useNavigate();
    const { id, name, email } = location.state.contact;
    const [ state, setState ] = useState({ 
        id : id, 
        name : name, 
        email : email
    });
    
    const Update = (e) => {
        e.preventDefault();
        if(state.name === "" || state.email === "") {
            alert("all fields are compulsory");
            return;
        }
        console.log(state);
        props.updateContactHandler(state);
        // setState({name : "", email : ""});
        // console.log(this.props);
        // this.props.history.push("/");
        // window.history.pushState(null, window.location.origin+"/");
        // window.location.assign(window.location.origin + "/");
        
        navigate("/list");
    };

    return (
        <div className="outsides">
        <div className="main">
            
            <div className="head">Edit Contact</div>
            <form className="form">
                <div className="field">
                    <span className="label">Name</span>
                    <input type="text" name="name" placeholder="Name" value={state.name}
                        onChange={(e) => setState( {...state, name: e.target.value} )} 
                    />
                </div>
                <div className="field">
                    <span className='label'>Email</span>
                    <input type="text" name="email" placeholder="Email" value={state.email}
                        onChange={(e) => setState( {...state, email: e.target.value} )}
                    />
                </div>
                <Link to="/">
                    <button className="btna" onClick={Update}>Update</button>
                </Link>
            </form>
        </div>
    </div>
    )
    
}

export default EditContact;