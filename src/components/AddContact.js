import React from "react";
import { Link } from "react-router-dom";
import './AddContact.css';

class AddContact extends React.Component{
    state = {
        name : "",
        email : ""
    };
    
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "") {
            alert("all fields are compulsory");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name : "", email : ""});
        console.log(this.props);
        // this.props.history.push("/");
        // window.history.pushState(null, window.location.origin+"/");
        window.location.assign(window.location.origin + "/list");
    }

    render() {
        return (
            <div className="outsides">
            <div className = "main">
                
                <div className="head">Add Contact</div>

                <form className = "form" >
                    <div className = "field">
                        <span className="label">Name</span>
                        <input type = "text" name = "name" placeholder = "Name" 
                        value = {this.state.name}
                        onChange = { (e) => this.setState( {name : e.target.value} ) }/>
                    </div>
                    <div className = "field">
                        <span className="label">Email</span>
                        <input type = "text" name = "email" placeholder = "Email" 
                        value = {this.state.email}
                        onChange = { (e) => this.setState( {email : e.target.value} ) }/>
                    </div>
                    <Link to = "/">
                    <button className = "btna" onClick = {this.add}>Add</button>
                    </Link>
                </form>
            </div>
        </div>
        )
    }
}

export default AddContact;