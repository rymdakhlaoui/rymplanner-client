import { Badge } from 'antd';
import React from 'react'
import DeleteTask from './DeleteTask';
import DoneTask from './DoneTask';
import EditTask from './EditTask';

const TodoModel = ({todo}) => {

  return (
    <div className="w-10/12 h-fit p-4 bg-slate-500 rounded-xl flex justify-between">
      <div className="text-white text-xl">
        <p className={todo.isDone && "line-through text-gray-400"}>
          {todo.title}
        </p>
        {todo.isDone ? (
          <Badge.Ribbon color="green" text="Completed"></Badge.Ribbon>
        ) : (
          <Badge.Ribbon color="volcano" text="Pending"></Badge.Ribbon>
        )}
      </div>
      <div className="flex gap-2">
        <DoneTask todo={todo} />
        <EditTask todo={todo} />
        <DeleteTask todo={todo} />
      </div>
    </div>
  );
}

export default TodoModel