import css from './Contact.module.css';

export const ContactList = ({contacts, deleteContact}) => (
    <ul>
       {contacts.map(({ id, name, number }) => {
        return ( 
          <li key={id} className={css.contacts__list}>
            <p>
              {name}: {number}
            </p>
            <button type="button" className={css.btn_delet} onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })} 
    </ul>
  );
 