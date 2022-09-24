import { useDispatch } from 'react-redux';
import store from '../Redux/store';

const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default useAppDispatch;
