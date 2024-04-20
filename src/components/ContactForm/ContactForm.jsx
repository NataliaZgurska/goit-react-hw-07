import { useDispatch } from 'react-redux';

import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsOps';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    console.log(form);

    const newContact = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };
    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <form className={css.formAdd} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        <span>Name:</span>
        <input
          type="text"
          name="name"
          autoComplete="off"
          required
          placeholder="name"
        />
      </label>

      <label className={css.formLabel}>
        <span>Number:</span>
        <input type="number" name="number" autoComplete="off" required />
      </label>

      <Button type="submit">Add task</Button>
    </form>
  );
};

//         <Form className={css.formAdd}>
//           <label className={css.formLabel}>
//             <span>Name:</span>
//             <Field type="text" name="name" autoComplete="off" />
//             <ErrorMessage
//               className={css.errorMessage}
//               component="p"
//               name="name"
//             />
//           </label>

//           <label className={css.formLabel}>
//             <span>Number:</span>
//             <Field type="number" name="number" autoComplete="off" />
//             <ErrorMessage
//               className={css.errorMessage}
//               component="p"
//               name="number"
//             />
//           </label>

//           <button type="submit" className={css.formAddBtn}>
//             Submit
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default ContactForm;
