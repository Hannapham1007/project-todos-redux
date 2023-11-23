import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tasks } from "../reducers/tasks";
import "../styles/TaskInputForm.css";
import styled from "styled-components";

const InputTaskForm = styled.input`
  border-radius: 10px;
  padding: 10px 10px;
  background: var(--white);
  border: none;
  color: var(--textInputTask);
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  height: 80px;
  &::placeholder {
    color: var(--textPlaceHolder);
    font-size: 16px;
    font-weight: 700;
  }
`;

const ButtonCancel = styled.button`
  border: none;
  color: var(--white);
  font-weight: 700;
  background: var(--tertiary);
  border-radius: 4px;
  padding: 8px 12px;
  width: 80px;
`;
const ButtonSave = styled.button`
  border: none;
  color: var(--primary);
  font-weight: 700;
  background: var(--white);
  border-radius: 4px;
  padding: 8px 12px;
  width: 80px;
`;

export const TaskInputForm = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  /**
   * Handle the change event of the task input, updating the task state
   */
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  /**
   *Handle save for the task. If the task is not empty, dispatches an action to add the task,
   clear the input, then notifies AddTask(parent component) to hide the input form
   */
  const handleSave = () => {
    /*Check if the task is empty, shows the message */
    if (task.trim() === "") {
      alert("Oops! It looks like you forgot to enter a task.");
    } else {
      dispatch(tasks.actions.addTask(task));
      setTask("");
      onSave();
    }
  };
  return (
    <section>
      <div className="task-input-container">
        <InputTaskForm
          type="text"
          name="task"
          value={task}
          onChange={handleTaskChange}
          placeholder="What are you working on?"
        ></InputTaskForm>
        <div className="save-cancel-container">
          <ButtonCancel onClick={onCancel}>Cancel</ButtonCancel>
          <ButtonSave onClick={handleSave}>Save</ButtonSave>
        </div>
      </div>
    </section>
  );
};
