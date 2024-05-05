import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AppConstants } from "../assets/constants";

const cleanTask = {
  title: "",
  description: "",
  status: AppConstants.TODO,
  priority: 3,
}

export const CreateTaskModal = ({show, closeModal, createTask, taskToEdit}) => {
  const [taskInfo, setTaskInfo] = useState(cleanTask);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setTaskInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCreateTask = () => {
    setTaskInfo(cleanTask)
    createTask(taskInfo);
    closeModal();
  };

  const handleClose = () => {
    setTaskInfo(cleanTask)
    taskToEdit = null
    closeModal();
  }

  useEffect(() => {
    setTaskInfo(taskToEdit ?? cleanTask)
  }, [taskToEdit])

  return (
    <Modal show={show} onHide={handleClose} size="xxlg" animation={true}>
      <Modal.Header closeButton className="modal-colors">
        <Modal.Title>Creating New Task</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-colors">
        <Form>
          <Form.Group className="mb-3" controlId="taskTitle">
            <Form.Label>Task Title</Form.Label>
            <Form.Control autoFocus type="text"
              placeholder="Make dinner..." className="dark-inputs"
              name="title" value={taskInfo.title}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="taskDescription">
            <Form.Label>Task Description</Form.Label>
            <Form.Control as="textarea" rows={4}
              style={{resize: "none"}} name="description"
              placeholder="First go buy food then cook and then..."
              className="dark-inputs" onChange={handleInputChange}
              value={taskInfo.description}
            />
          </Form.Group>

          <Form.Label className="mt-1">Task Status</Form.Label>
          <Form.Select
            className="dark-inputs"
            aria-label="Select Task Status"
            name="status" onChange={handleInputChange}
            value={taskInfo.status}>
            <option value="TO-DO">TO-DO</option>
            <option value="BLOCKED">BLOCKED</option>
            <option value="IN-PROGRESS">IN-PROGRESS</option>
            <option value="DONE">DONE</option>
          </Form.Select>

          <Form.Label className="mt-3">Task Priority</Form.Label>
          <Form.Select className="dark-inputs"
            aria-label="Select Task Priority" name="priority"
            value={taskInfo.priority} onChange={handleInputChange}>
            <option value="3">Minimal</option>
            <option value="2">Medium</option>
            <option value="1">High</option>
          </Form.Select>
        </Form>
      </Modal.Body>

      <Modal.Footer className="modal-colors">
        <Button variant="secondary" onClick={handleClose}> Close </Button>
        <Button variant={taskToEdit ? 'danger' : 'success'}
          onClick={handleCreateTask} disabled={!taskInfo.title || !taskInfo.status || !taskInfo.title}
        > {taskToEdit ? 'Edit Task' : 'Create Task'}</Button>
      </Modal.Footer>
    </Modal>
  );
};
