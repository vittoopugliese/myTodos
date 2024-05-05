import React, { useState, useEffect } from "react";
import Task from "./Task";
import { ColumnTitle } from "./ColumnTitle";
import { tasks } from "../assets/columns";
import { AppConstants } from "../assets/constants";

const initialColumns = [
  { title: AppConstants.TODO, tasks: [] },
  { title: AppConstants.BLOCKED, tasks: [] },
  { title: AppConstants.IN_PROGRESS, tasks: [] },
  { title: AppConstants.DONE, tasks: [] },
];

const Board = ({ newTask, onEditTask }) => {
  const [taskList, setTaskList] = useState(tasks);
  const [columns, setColumns] = useState(initialColumns);

  const updateColumns = (taskList) => {
    return initialColumns.map((column) => ({
      ...column,
      tasks: taskList.filter((task) => task.status === column.title),
      tasksNumber: taskList.filter((t) => t.status === column.title).length,
    }));
  };

  useEffect(() => {
    let updatedColumns = updateColumns(taskList);
    setColumns(updatedColumns);
  }, [taskList]);

  useEffect(() => {
    if (newTask) {
      let id = new Date().getTime()
      let task = {...newTask, id, code: `TT-2`}
      setTaskList((prevTaskList) => [...prevTaskList, task]);
    }

  }, [newTask]);

  return (
    <div className="grid-container">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="column-container">
          <ColumnTitle column={column} />
          <hr />
          <div className="task-list">
            {column.tasks.map((task) => (
              <Task key={task.id} task={task} 
                editTask={(e) => onEditTask(e)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;