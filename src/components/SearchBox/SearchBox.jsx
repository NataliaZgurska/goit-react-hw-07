import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const onChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.filterContainer}>
      <p>Search contacts by name</p>
      <input
        type="text"
        id="searchInput"
        placeholder="Search..."
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default SearchBox;
