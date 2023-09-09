import React, { Component } from "react";
import {ContactsForm} from './ContactsForm/ContactsForm';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import shortid from "shortid";

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter:'',
  }

  addContact = ({name, number}) => {
    const contact = {
      id:shortid.generate(),
      name,
      number,
    };
   
    this.state.contacts.some(
      i =>
        (i.name.toLowerCase() === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilterInput = e => {
    this.setState({ filter: e.target.value });
  };

  findContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render(){
    const { filter } = this.state;
    return (
      <div
        style={{
          textAlign:'center',
          fontSize: '16px',
          color: '#010101'
          
        }}
      >
         <h1>Phonebook</h1>
         <ContactsForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} changeFilterInput={this.changeFilterInput} />
        <ContactList 
        contacts={this.findContacts()}
        deleteContact={this.deleteContact}
        /> 
    
      </div>
    );
  }
 
};


