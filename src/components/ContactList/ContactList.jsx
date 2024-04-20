import { useSelector } from 'react-redux';

// import { selectVisibleTasks } from '../../redux/selectors';
import css from './TaskList.module.css';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  // return (
  //   <ul className={css.list}>
  //     {tasks.map(task => (
  //       <li className={css.listItem} key={task.id}>
  //         <Task task={task} />
  //       </li>
  //     ))}
  //   </ul>
  // );

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

// import { useDispatch, useSelector } from 'react-redux';

// import Contact from '../Contact/Contact';

// import css from './ContactList.module.css';
// import { useMemo } from 'react';
// import { selectContacts } from '../../redux/contactsSlice';
// import { selectNameFilter } from '../../redux/filtersSlice';

// const ContactList = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectNameFilter);

//   // const visibleContacts = contacts.filter(contact =>
//   //   contact.name.toLowerCase().includes(filter.toLowerCase())
//   // );

//   const visibleContacts = useMemo(
//     () =>
//       contacts.filter(contact => {
//         return contact.name.toLowerCase().includes(filter.toLowerCase());
//       }),
//     [filter, contacts]
//   );

//   return (
//     <div>
//       <ul className={css.contactList}>
//         {Array.isArray(visibleContacts) &&
//           visibleContacts.map(contact => {
//             return (
//               <li className={css.contactItem} key={contact.id}>
//                 <Contact contact={contact} />
//               </li>
//             );
//           })}
//       </ul>
//     </div>
//   );
// };

// export default ContactList;
//
