import {useState} from "react";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [newTask, setNewTask] = useState(null);
  const [editedTask, setEditedTask] = useState(null);

  const handleCreateTask = (task) => {
    setNewTask(task);
  };

  return (
    <>
      <Header createTask={handleCreateTask} openTaskEditor={editedTask} />
      <Board newTask={newTask} onEditTask={e => setEditedTask(e)} />
    </>
  );
}

export default App;