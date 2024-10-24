import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/Actions/TaskActions";
import { useNavigate } from "react-router-dom";


const { TextArea } = Input;
const AddTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [newTitle, setNewTitle] = useState("")

  const handleAdd = () => {
    const newTask = {  title: newTitle, isDone: false };
    dispatch(addTask({ newTask, navigate }));
    setNewTitle("");
    handleCancel();
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add new Task
      </Button>
      <Modal
        title="Add new Task"
        open={isModalOpen}
        onOk={handleAdd}
        onCancel={handleCancel}
        okText="Add Task"
        
      >
        <TextArea value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} rows={4} placeholder="Enter a title for your Task..." />
      </Modal>
    </>
  );
};
export default AddTask;
