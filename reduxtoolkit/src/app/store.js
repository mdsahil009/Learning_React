import {configureStore} from '@reduxjs/toolkit';

import todoRedcuer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoRedcuer
})