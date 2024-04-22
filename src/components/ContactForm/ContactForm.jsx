import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;
    console.log(name, name.value);
    console.log(number, number.value);

    dispatch(addContact(formData));
    form.reset();
  };

  return (
    // <form className={css.formAdd} onSubmit={handleSubmit}>
    //   <label className={css.formLabel}>
    //     <span>Name:</span>
    //     <input
    //       type="text"
    //       name="name"
    //       // autoComplete="off"
    //       required
    //       placeholder="name"
    //     />
    //   </label>

    //   <label className={css.formLabel}>
    //     <span>Number:</span>
    //     <input type="number" name="number" required />
    //   </label>

    //   <button type="submit">Add Contact</button>
    // </form>

    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="number" name="number" />
      <button type="submit">Add Contact</button>
    </form>
  );
};
export default ContactForm;

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
