import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteTaskById } from '../JS/Actions/TaskActions';
import { useNavigate } from 'react-router-dom';

const DeleteTask = ({todo}) => {
  const navigate = useNavigate();
      const [deleteModal, setDeleteModal] = useState(false);
      const dispatch = useDispatch();

      const showModal = () => {
        setDeleteModal(true);
      };

      const handleDelete = () => {
        const id = todo._id;
        dispatch(deleteTaskById({id, navigate}));  
        setDeleteModal(false);
      };
  return (
    <>
      <Button onClick={showModal} shape="circle" icon={<DeleteOutlined />} />
      {/* Delete modal */}
      <Modal
        title="Delete Task"
        open={deleteModal}
        onOk={handleDelete}
        okText="Yes"
        okType="danger"
        onCancel={() => setDeleteModal(false)}
      >
        <p>
          Are you sure you want to delete <b>{todo.title}</b>?
        </p>
      </Modal>
    </>
  );
}

export default DeleteTask