const Task = ({task, editTask}) => {
  const {title, priority, code, id} = task;

  return (
    <div className="task-container" onClick={(e) => editTask(task)}>
      <div className="task-header">
        <b className="task-code">{code}</b>
        <img
          src={`./status-${priority}.svg`}
          width={"20px"} draggable="false"
        />
      </div>
      <div className="d-flex flex-row">
        <p className="task-text">{title}</p>
        {/* <img className="check" src="./check.svg" width={"24px"} /> */}
      </div>
    </div>
  );
};

export default Task;
