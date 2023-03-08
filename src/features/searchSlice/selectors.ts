import {RootState} from 'features/store/types';

const selectSearchData = (state: RootState) => state.search;

export {selectSearchData};
