 import {combineReducers} from 'redux';
 import {ExampleComponentState, exampleComponentReducer} from './componentReducer';

 export interface AppState{
     example: ExampleComponentState,
 }

 export const reducers = combineReducers<AppState>({
     example: exampleComponentReducer,
 }); 