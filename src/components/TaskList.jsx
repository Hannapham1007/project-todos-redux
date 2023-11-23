import React from 'react'
import { useSelector } from 'react-redux';
import { Task } from './Task';

// Component render all task
export const TaskList = () =>{
    const allTasks = useSelector((store)=> store.tasks.taskData)
  return (
    //Fetch all tasks from the store
    <section className='task-list'>
        {allTasks.map((task) => (
        <Task key={task.id} task={task}/>
        ))}

    </section>
  )
}
