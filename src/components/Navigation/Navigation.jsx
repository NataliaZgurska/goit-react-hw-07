import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  //   const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>

      <NavLink className={css.link} to="/register">
        RegistrationPage
      </NavLink>

      <NavLink className={css.link} to="/login">
        LoginPage
      </NavLink>
      <NavLink className={css.link} to="/contacts">
        ContactsPage
      </NavLink>
    </nav>
  );
};
// <nav>
//   <NavLink className={css.link} to="/">
//     Home
//   </NavLink>
//   {isLoggedIn && (
//     <NavLink className={css.link} to="/tasks">
//       Tasks
//     </NavLink>
//   )}
// </nav>;
