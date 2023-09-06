import {createSlice, PayloadAction, createSelector} from '@reduxjs/toolkit';
import TaskInterface from '../interfaces/task';

interface initialStateInterface {
    data: {[key: string]: TaskInterface}
}

const initialState: initialStateInterface = {
    data: {},
};

const taskModel = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTaskToList: (state, {payload: task}: PayloadAction<TaskInterface>) => {
            state.data = {
                ...state.data,
                [task.id]: task,
            };
        },
        toggleTask: ({data}, {payload: {id, isCompleted}}: PayloadAction<Omit<TaskInterface, 'value'>>) => {
            data[id].isCompleted = isCompleted;
        },
    },
});

// Selectors
export const getSortedTasks = createSelector(
    (state: RootState) => state.tasks.data,
    (data) => {
        const tasks = Object.entries(data);

        tasks.sort((a, b) => b[1].id - a[1].id);

        return Object.fromEntries(tasks);
    }
);

export const {addTaskToList, toggleTask} = taskModel.actions;
export const {reducer} = taskModel;
