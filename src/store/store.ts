import { createStore, Dispatch } from 'redux';

import * as reducers from './reducer';
import { Actions } from './actions';


export const configureStore = () => createStore(reducers.reducer);
export type Dispatch = Dispatch<Actions>;
