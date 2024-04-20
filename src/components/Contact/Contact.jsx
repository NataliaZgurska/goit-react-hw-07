import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsOps';

import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.contactItemTextContainer}>
        <p className={css.contactItemText}>{name}</p>

        <p className={css.contactItemText}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Contact;
