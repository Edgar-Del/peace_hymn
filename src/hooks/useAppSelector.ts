import type {RootState} from 'features/store/types';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
