import { EditOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { editTask } from '../JS/Actions/TaskActions';

const { TextArea } = Input;
const EditTask = ({todo}) => {
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

      const handleChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
      };

    const handleEdit = () => {
      const id = todo._id;
      dispatch(editTask({id, newTask}))
      handleCancel()
      setNewTask({});
    }
  return (
    <>
      <Button onClick={showModal} shape="circle" icon={<EditOutlined />} />

      <Modal
        title="Edit Task"
        open={isModalOpen}
        onCancel={handleCancel}
        okText="Edit Task"
        onOk={handleEdit}
      >
        <TextArea
          onChange={(e) => handleChange(e)}
          name='title'
          rows={4}
          placeholder={todo.title}
          
        />
      </Modal>
    </>
  );
}

export default EditTask