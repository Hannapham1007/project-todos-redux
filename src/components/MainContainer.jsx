import React from "react";
import Header from "./Header";
import { TaskList } from "./TaskList";
import { AddTask } from "./AddTask";

// Main container that shows header, create task, all task
export const MainContainer = () => {
  return (
    <section className="main-container">
      <Header />
      <AddTask />
      <TaskList />
    </section>
  );
};
