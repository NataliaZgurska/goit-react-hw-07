import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';

import css from './ContactForm.module.css';

const FORM_INITIAL_VALUES = {
  name: '',
  number: '',
  favColor: '',
  description: '',
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  favColor: Yup.string()
    .required('Favorite color is required!')
    .oneOf(
      ['red', 'green', 'blue'],
      'Favorite color must be one of following: red, green, blue'
    ),
  description: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        ...values,
        id: nanoid(),
      })
    );
    actions.resetForm();
  };

  return (
    <div className={css.formAddContainer}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formAdd}>
          <label className={css.formLabel}>
            <span>Name:</span>
            <Field type="text" name="name" autoComplete="off" />
            <ErrorMessage
              className={css.errorMessage}
              component="p"
              name="name"
            />
          </label>

          <label className={css.formLabel}>
            <span>Number:</span>
            <Field type="number" name="number" autoComplete="off" />
            <ErrorMessage
              className={css.errorMessage}
              component="p"
              name="number"
            />
          </label>

          <div>
            <span>Favorite color:</span>
            <div className={css.radioBtn}>
              <label className={css.formRadio}>
                <span style={{ color: 'green' }}>Green:</span>
                <Field type="radio" value="green" name="favColor" />
              </label>
              <label className={css.formRadio}>
                <span style={{ color: 'blue' }}>Blue:</span>
                <Field type="radio" value="blue" name="favColor" />
              </label>
              <label className={css.formRadio}>
                <span style={{ color: 'red' }}>Red:</span>
                <Field type="radio" value="red" name="favColor" />
              </label>
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="favColor"
              />
            </div>
          </div>

          <label className={css.formLabel}>
            <span>Description:</span>
            <Field as="textarea" name="description" />
            <ErrorMessage
              className={css.errorMessage}
              component="p"
              name="description"
              autoComplete="off"
            />
          </label>

          <button type="submit" className={css.formAddBtn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
