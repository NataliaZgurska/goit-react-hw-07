import { useSelector } from 'react-redux';

// import { selectVisibleTasks } from '../../redux/selectors';
import { selectFilteredContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  // const contacts = useSelector(selectFilteredContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  // console.log(contacts);
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
    <div>
      ContactList
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          return (
            <li className={css.contactItem} key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;

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
