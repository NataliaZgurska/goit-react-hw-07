import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';

import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const { id, name, number, favColor, description } = contact;
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.contactItemTextContainer}>
        <p style={{ color: favColor }} className={css.contactItemText}>
          {name}
        </p>

        <p className={css.contactItemText}>
          <FaPhone />
          {number}
        </p>
        <p className={css.contactItemText}>{description}</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default Contact;
