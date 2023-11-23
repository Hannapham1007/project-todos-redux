import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    taskData: [
      { id: 1, text: "Watch video on actions & reducers", complete: false },
      { id: 2, text: "Follow redux codealong", complete: false },
      { id: 3, text: "Fork weekly assignment", complete: false },
      { id: 4, text: "Create a todo app", complete: false },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        text: action.payload,
        complete: false,
      };
      state.taskData = [newTask, ...state.taskData];
    },
    deleteTask: (state, action) => {
      state.taskData.splice(action.payload, 1);
    },
    checkCompleteTask: (state, action) => {
      const taskToUpdate = state.taskData.find(
        (item) => item.id === action.payload
      );
      if (taskToUpdate) {
        taskToUpdate.complete = !taskToUpdate.complete;
      }
    },
    deleteAll: (state,action) => {
        return{...state, taskData:[] }
       
    },
    completeAll: (state,action) => {
        const updatedItems = state.taskData.map((item) => {const updatedTask = {...item, complete: true,}
            return updatedTask
        })
        return {...state,taskData: updatedItems};
    },
    uncompleteAll: (state,action) => {
        const updatedItems = state.taskData.map((item) => {const updatedTask = {...item, complete: false,}
            return updatedTask
        })
        return {...state, taskData: updatedItems};
    }
  },
});
