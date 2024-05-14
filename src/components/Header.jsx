import {useEffect, useState} from "react";
import {CreateTaskModal} from "./CreateTaskModal";

export const Header = ({createTask, openTaskEditor}) => {
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
    if (openTaskEditor) {
      setShow(true);
    }
  }, [openTaskEditor]);

  const prioritys = [ "Low", "Medium", "High"];

  return (
    <>
      <header>
        {/* <div className="d-flex flex-column" style={{'scale': '0.7'}}>
          {prioritys.map((p,i) => {
            return (
              <div className="d-flex flex-row" key={p}>
                <p className="m-1">{p}</p>
                <img src={`./status-${i+1}.svg`} width="20px"/>
              </div>
            );
          })}
        </div> */}
        <p className="app-logo">toddOs</p>
        <div className="search-container"></div>
        <div className="side-menu-container">
          <div className="add-icon-container" onClick={openModal}>
            <img
              src="./add.svg"
              width="24px"
              className="add-icon"
              alt="Add icon"
            />
            <p>New Task</p>
          </div>
        </div>
      </header>
      <CreateTaskModal
        show={show}
        taskToEdit={openTaskEditor}
        createTask={handleCreateTask}
        closeModal={closeModal}
      />
    </>
  );
};

export default Header;
