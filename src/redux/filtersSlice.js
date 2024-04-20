import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './contactsSlice';

const filterSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE.filters,

  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// export const selectNameFilter = state => state.filters.name;
export const { changeFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
