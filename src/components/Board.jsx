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

  useEffect(() => {
    const updatedColumns = initialColumns.map((column) => ({
      ...column,
      tasks: taskList.filter((task) => task.status === column.title),
      tasksNumber: taskList.filter((t) => t.status === column.title).length,
    }));
    setColumns(updatedColumns);
  }, [taskList]);

  useEffect(() => {
    if (newTask) {
      const id = new Date().getTime();
      const task = {...newTask, id, code: `TT-${taskList.length + 1}`};
      setTaskList(prevTaskList => [...prevTaskList, task]);
    }
  }, [newTask]);

  function handleOnDrag(e, task) {
    e.dataTransfer.setData("task", JSON.stringify(task));
  }

  function handleOnDrop(e, droppedColumnStatus) {
    e.preventDefault();
    const task = JSON.parse(e.dataTransfer.getData("task"));
    const updatedTask = { ...task, status: droppedColumnStatus };
    setTaskList(prevTaskList => {
      const index = prevTaskList.findIndex(t => t.id === updatedTask.id);
      if (index === -1) {
        return prevTaskList;
      }
      
      const newTaskList = prevTaskList.filter(t => t.id !== updatedTask.id);
      return [...newTaskList, updatedTask];
    });
  }

  function handleDragOver(e){
    e.preventDefault();
  }

  function previewTask(task){

  }

  return (
    <div className="grid-container">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="column-container" 
          onDrop={(e) => handleOnDrop(e, column.title)} onDragOver={handleDragOver}>
          <ColumnTitle column={column}/>
          <hr />
          <div className="task-list">
            {column.tasks.map((task, i) => (
              <Task key={task.id} task={task} 
                editTask={(task) => onEditTask(task)} 
                previewTask={(task) => previewTask(task)}
                onDragStart={(e) => handleOnDrag(e, task)} />// custom !!
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;