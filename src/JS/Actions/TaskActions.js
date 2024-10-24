import axios from "axios";
import { ADD_TASK_FAIL, ADD_TASK_LOAD, ADD_TASK_SUCCESS, DELETE_TASK_BYID_FAIL, DELETE_TASK_BYID_LOAD, DELETE_TASK_BYID_SUCCESS, DONE_TASKS_FAIL, DONE_TASKS_LOAD, DONE_TASKS_SUCCESS, EDIT_TASK_FAIL, EDIT_TASK_LOAD, EDIT_TASK_SUCCESS, GET_TASK_BYID_FAIL, GET_TASK_BYID_LOAD, GET_TASK_BYID_SUCCESS, GET_TASKS_FAIL, GET_TASKS_LOAD, GET_TASKS_SUCCESS } from "../ActionTypes/TaskActionTypes";

// get tasks action
export const getTasks = () => async (dispatch) => {
    dispatch({ type: GET_TASKS_LOAD });
    try {
        const result = await axios.get('/api/tasks/getTasks')
        dispatch({ type: GET_TASKS_SUCCESS, payload: result.data });
    } catch (error) {
        dispatch({ type: GET_TASKS_FAIL, payload: error });
    }
}

// get task by id action
export const getTaskById = (id) => async (dispatch) => {
  dispatch({ type: GET_TASK_BYID_LOAD });
  try {
    const result = await axios.get(`/api/tasks/getTaskById/${id}`);
    dispatch({ type: GET_TASK_BYID_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_TASK_BYID_FAIL, payload: error });
  }
};

// delete task by id action
export const deleteTaskById = ({id, navigate}) => async (dispatch) => {
  dispatch({ type: DELETE_TASK_BYID_LOAD });
  try {
    const result = await axios.delete(`/api/tasks/deleteTask/${id}`);
    dispatch({ type: DELETE_TASK_BYID_SUCCESS, payload: result.data });
    navigate("/tasks");
    dispatch(getTasks());
  } catch (error) {
    dispatch({ type: DELETE_TASK_BYID_FAIL, payload: error });
  }
};

// add task action
export const addTask = ({newTask, navigate}) => async (dispatch) => {
  dispatch({ type: ADD_TASK_LOAD });
  try {
    const token = localStorage.getItem("token");
    const result = await axios.post("/api/tasks/addTask", newTask, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: ADD_TASK_SUCCESS, payload: result.data });
    navigate('/tasks')
    dispatch(getTasks());
  } catch (error) {
    dispatch({ type: ADD_TASK_FAIL, payload: error });
  }
};

// edit task action
export const editTask = ({id, newTask}) => async (dispatch) => {
  dispatch({ type: EDIT_TASK_LOAD });
  try {
    const result = await axios.put(`/api/tasks/editTask/${id}`, newTask);
    dispatch({ type: EDIT_TASK_SUCCESS, payload: result.data });
    dispatch(getTaskById(id));
    dispatch(getTasks());
  } catch (error) {
    dispatch({ type: EDIT_TASK_FAIL, payload: error });
  }
};

// done task action
export const doneTask = (id) => async (dispatch) => {
  dispatch({ type: DONE_TASKS_LOAD });
  try {
    const result = await axios.put(`/api/tasks/doneTask/${id}`);
    dispatch({ type: DONE_TASKS_SUCCESS, payload: result.data });
    dispatch(getTasks());
  } catch (error) {
    dispatch({ type: DONE_TASKS_FAIL, payload: error });
  }
};