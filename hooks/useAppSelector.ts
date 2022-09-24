import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
