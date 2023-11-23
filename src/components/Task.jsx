import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "../reducers/tasks";
import styled from "styled-components";
import moment from "moment";

const TaskContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background-color: var(--white);
  margin-top: 10px;
  border-radius: 4px;
  justify-content: space-between;
`;
const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  outline: none;
  border: 1px solid var(--textInputTask);
  cursor: pointer;
  appearance: none;
  &:checked {
    background-color: green;
    border-color: green;

    &::before {
      content: "✔";
      font-size: 18px;
      color: var(--white);
      position: absolute;
    }
  }
`;

const ButtonDelete = styled.button`
  border: none;
  background: none;
  color: var(--textInputTask);
  font-weight: 700;
  cursor: pointer;
`;

const TaskContent = styled.div`
  flex: 1;
  text-align: left;
  padding-left: 10px;
`;

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  /**
   * Handle mark a task is completed
   */
  const handleCompleteClick = () => {
    dispatch(tasks.actions.checkCompleteTask(task.id));
  };
  /**
   * Handle delete a task
   */
  const handleDeleteClick = () =>{
    dispatch(tasks.actions.deleteTask(task))

  }
  return (
    <TaskContainer>
        <CheckboxInput
          onChange={handleCompleteClick}
          checked={task.complete}
          type="checkbox"
        />
      <TaskContent>
        <p style={{textDecoration: task.complete ? "line-through" : "none",}}>
          {task.text}
        </p>
      </TaskContent>
        <ButtonDelete onClick={handleDeleteClick}>
          Delete
        </ButtonDelete>
    </TaskContainer>
  );
};
