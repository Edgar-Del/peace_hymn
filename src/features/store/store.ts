import {configureStore} from '@reduxjs/toolkit';
import {searchSlice} from 'features/searchSlice';

const store = configureStore({
  reducer: {
    [searchSlice.name]: searchSlice.reducer,
  },
});

export default store;
