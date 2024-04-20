import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

// export const selectStatusFilter = state => state.filters.status;
export const selectNameFilter = state => state.filters.name;

//створи та експортуй мемоізований селектор selectFilteredContacts. повертає відфільтрований масив контактів

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      console.log('selectFilteredContacts');
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (tasks, statusFilter) => {
//     console.log('Calculating visible tasks');

//     switch (statusFilter) {
//       case statusFilters.active:
//         return tasks.filter(task => !task.completed);
//       case statusFilters.completed:
//         return tasks.filter(task => task.completed);
//       default:
//         return tasks;
//     }
//   }
// );

// export const selectVisibleTasks = createSelector(
//   [selectTasks, selectStatusFilter],
//   (tasks, statusFilter) => {
//     console.log('Calculating visible tasks');

//     switch (statusFilter) {
//       case statusFilters.active:
//         return tasks.filter(task => !task.completed);
//       case statusFilters.completed:
//         return tasks.filter(task => task.completed);
//       default:
//         return tasks;
//     }
//   }
// );

// export const selectTaskCount = createSelector([selectTasks], tasks => {
//   console.log('Calculating task count');

//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// });
