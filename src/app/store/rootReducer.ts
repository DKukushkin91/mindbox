import {combineReducers} from '@reduxjs/toolkit';
import {taskModel} from '../../entities/task';

export const rootReducer = combineReducers({
    tasks: taskModel.reducer,
});
