import { useEffect, useState } from "react";
import { CreateTaskModal } from "./CreateTaskModal";

export const Header = ({ createTask, openTaskEditor }) => { 
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
  };

  const openModal = () => {
    setShow(true);
  };

  const handleCreateTask = (task) => {
    createTask(task);
    setShow(false);
  };

  useEffect(() => {
    if(openTaskEditor){
      setShow(true);
    }
  }, [openTaskEditor])

  return (
    <>
      <header>
        <div className="app-logo"> MyTodos </div>
        <div className="search-container"></div>
        <div className="side-menu-container">
          <div className="add-icon-container" onClick={openModal}>
            <img src="./add.svg" width="24px" className="add-icon" alt="Add icon" />
            <p>New Task</p>
          </div>
        </div>
      </header>
      <CreateTaskModal show={show} taskToEdit={openTaskEditor}
        createTask={handleCreateTask} closeModal={closeModal} />
    </>
  );
};

export default Header;