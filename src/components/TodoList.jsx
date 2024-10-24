import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TodoModel from './TodoModel';
import {  Empty } from 'antd';
import AddTask from './AddTask';
import FilterTask from './FilterTask';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { getTasks } from '../JS/Actions/TaskActions';


const TodoList = () => {
      const dispatch = useDispatch();
    const todos = useSelector((state) => state.TaskReducer.tasks);

    const user = useSelector((state) => state.AuthReducer.user);

    

    const [filter, setFilter] = useState("All")

        useEffect(() => {
          dispatch(getTasks());
        }, [dispatch]);

  const myTodos = todos.filter((todo) => todo.addedBy === user._id);

    const totalTasks = myTodos.length;

    const doneTasks = myTodos.filter((todo) => todo.isDone === true).length;

  return (
    <div className="bg-slate-200 w-4/6 min-h-12 mt-20 rounded-2xl">
      <div className="text-center my-6">
        <h1 className="text-4xl font-bold text-gray-800">TaskMaster</h1>
        <p className="text-lg text-gray-500 mt-2">Track Your Tasks with Ease</p>
      </div>
      <div className="text-center">
        <h2 className="text-center font-semibold text-gray-800 text-xl">
          Score: {doneTasks} / {totalTasks}
        </h2>
        <div className="text-xl">
          {doneTasks === 0 ? (
            <FrownOutlined className="text-red-500" />
          ) : doneTasks > 0 && doneTasks < totalTasks ? (
            <MehOutlined className="text-orange-400" />
          ) : (
            <SmileOutlined className="text-green-600" />
          )}
        </div>
      </div>
      <div className="flex justify-between px-24 py-4">
        <AddTask />
        <FilterTask filter={filter} setFilter={setFilter} />
      </div>

      <div className="flex flex-col gap-4 items-center">
        {myTodos.length === 0 ? (
          <Empty />
        ) : filter === "Done" ? (
          myTodos
            .filter((todo) => todo.isDone === true)
            .map((todo) => <TodoModel key={todo._id} todo={todo} />)
        ) : filter === "Undone" ? (
          myTodos
            .filter((todo) => todo.isDone === false)
            .map((todo) => <TodoModel key={todo._id} todo={todo} />)
        ) : (
          myTodos.map((todo) => <TodoModel key={todo._id} todo={todo} />)
        )}
      </div>
    </div>
  );
}

export default TodoList