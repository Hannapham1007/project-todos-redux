import React, { useState } from "react";
import { TaskInputForm } from "./TaskInputForm";
import { useDispatch, useSelector } from "react-redux";
import { tasks } from "../reducers/tasks";
import styled from "styled-components";
import "../styles/AddTask.css";

const ButtonStyle = styled.button`
  color: var(--white);
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
  background: var(--tertiary);
  border: none;
  padding: 6px 6px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const H2 = styled.h2`
  color: var(--white);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;
const AddTaskButton = styled.button`
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 6px 0px 0px var(--light-grey);
  border: none;
  padding: 15px 50px;
  color: var(--primary);
  font-weight: 700;
`;

export const AddTask = () => {
  const dispatch = useDispatch();
  const [isFormVisible, setFormVisibility] = useState(false);
  const taskList = useSelector((store) => store.tasks.taskData);
  const completedTask = taskList.filter((item) => item.complete);
  /**
   * Sets the visibility of the task input form to true, displays the form
   */
  const handleShowForm = () => {
    setFormVisibility(true);
  };
  /**
   * Cancels the task input by setting the form visibility to false
   */
  const handleCancel = () => {
    setFormVisibility(false);
  };
  /**
   * After saving the task, sets the form visibility to false
   */
  const handleSave = () => {
    setFormVisibility(false);
  };
  /**
   * Handle mark all tasks are completed
   */
  const handleCompleteAll = ()=>{
    dispatch(tasks.actions.completeAll())
  }
  /**
   * Handle mark all tasks are uncompleted
   */
  const handleUnCompleteAll = ()=>{
    dispatch(tasks.actions.uncompleteAll())
  }
  /**
   * Handle delete all tasks
   */
  const handleDeleteAll = ()=>{
    dispatch(tasks.actions.deleteAll())
  }


  return (
    <section className="add-task-container">
      <div className="button-container">
        <ButtonStyle onClick={handleCompleteAll }>
          Complete All
        </ButtonStyle>
        <ButtonStyle onClick={handleUnCompleteAll}>
          Uncomplete All
        </ButtonStyle>
        <ButtonStyle onClick={handleDeleteAll}>
          Delete All
        </ButtonStyle>
      </div>
      <H2> Task: {completedTask.length}/{taskList.length}</H2>
      <div className="add-task-button-container">
        <AddTaskButton onClick={handleShowForm}> + Add Task</AddTaskButton>
      </div>
      {isFormVisible && (
        <TaskInputForm onSave={handleSave} onCancel={handleCancel} />
      )}
    </section>
  );
};
