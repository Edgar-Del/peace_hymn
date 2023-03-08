import {AppDispatch} from 'features/store/types';
import {useDispatch} from 'react-redux';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
