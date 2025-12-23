//libs
import {useContext} from 'react';

//context
import { ThothContext } from '../context/ThothContext';

export default function useThothContext() {
    return useContext(ThothContext);
};