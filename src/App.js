import { React, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services.js';
import Products from './components/Products.js';
import SignUp from './components/SignUp.js';

import { v4 as uuid } from 'uuid';
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import EditContact from './components/EditContact';
import api from "./api/axios_file";

function App() {

	const LOCAL_STORAGE_KEY = "contacts";
	const [ contacts, setContacts ] = useState([]);
	const [ search, setSearch ] = useState("");
	const [ searchResults, setSearchResults ] = useState([]);
  
	const retrieveContacts = async () => {
	  const response = await api.get("/contacts");
	  return response.data;
	};
  
	const addContactHandler = async (contact) => {
	  console.log(contact);
	  const request = {
		id : uuid(),
		...contact
	  }
	  const response = await api.post("/contacts", request);
	  console.log(response);
	  setContacts([...contacts, response.data]); //or just response also works
	}
  
	const updateContactHandler = async (contact) => {
	  console.log(contact);
	  const response = await api.put(`/contacts/${contact.id}`, contact);
	  const { id, name, email } = response;
	  setContacts (
		contacts.map(
		  (contact) => {
			return contact.id === id ? {...response} : contact;
		  }
		)
	  );
	};
  
	const removeContactHandler = async (id) => {
	  await api.delete(`/contacts/${id}`);
	  const newContactList = contacts.filter( (contact) => {
		  return contact.id !== id;
	  });
  
	  setContacts(newContactList);
	}
  
	const searchHandler = (searchTerm) => {
	  setSearch(searchTerm);
	  if(searchTerm !== "") {
		const newContactList = contacts.filter( (contact) => {
		  return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
		});
		setSearchResults(newContactList);
	  }
	  else {
		setSearchResults(contacts);
	  }
	}
  
	useEffect( () => {
  
	  const getAllContacts = async () => {
		const allContacts = await retrieveContacts();
		if(allContacts) setContacts(allContacts);
	  };
  
	  getAllContacts();
	}, []);
  
	useEffect( () => {
	  if(contacts.length > 0) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

  return (
    <BrowserRouter>
		<Navbar />

		<Routes>
			<Route path = '/' element = {<Home />} />
			<Route path = '/services' element = {<Services />} />
          	<Route path = '/products' element = {<Products />} />
          	<Route path = '/sign-up' element = {<SignUp />} />

  <Route 
    path = "/list" 
    element = {<ContactList 
      contacts = { search.length < 1 ? contacts : searchResults } 
      getContactId = {removeContactHandler} 
      term = {search} 
      searchKey = {searchHandler} 
    />} 
  />
  <Route 
    path = "/add" 
    element = {<AddContact 
      addContactHandler = {addContactHandler} 
    />} 
  /> 
  <Route 
    path = "/contact/:id" 
    element = {<ContactDetails />} 
  />
  <Route 
    path = "/edit/:id" 
    element = {<EditContact 
      updateContactHandler = {updateContactHandler} 
    />} 
  /> 

		</Routes>
	</BrowserRouter>
  );
}

export default App;
