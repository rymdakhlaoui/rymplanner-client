import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { doneTask } from '../JS/Actions/TaskActions';

const DoneTask = ({todo}) => {
    const dispatch = useDispatch()
  return (
    <Button
      onClick={() => dispatch(doneTask(todo._id))}
      shape="circle"
      icon={<CheckOutlined />}
    />
  );
}

export default DoneTask