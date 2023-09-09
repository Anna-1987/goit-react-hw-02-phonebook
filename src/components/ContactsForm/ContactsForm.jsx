import React, {Component} from "react";
import css from './Contacts.module.css';

export class ContactsForm extends Component {
    state = {
      name: '',
      number: ''
    }

    hendleChange = event =>{
        const {name, value} = event.currentTarget;
        this.setState({
            [name]:value,
        });
    };

    handleSubmit = event => {
        event.preventDefault(); 
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.setState({
           name: '',
           number: '',
         });
    }

  
    render(){
        const { name, number } = this.state;
        return(
            <form onSubmit={this.handleSubmit} className={css.contacts__form}>
            <div className={css.input__name}> 
            <label > 
            <span>Name</span> 
             <input
               type="text"
               name='name'
               value={name}
               className={css.input}
               onChange={this.hendleChange}
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
           />
             </label>
            </div>
            <div>
            <label>
            <span>Number</span> 
             <input
               type="tel"
               name='number'
               value={number}
               className={css.input}
               onChange={this.hendleChange}
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
            />
             </label>
             <button type="submit" className={css.btn__add}>Add contact</button>
            </div>
            </form>

        )
    }}