import { ADD_TASK_FAIL, ADD_TASK_LOAD, ADD_TASK_SUCCESS, DELETE_TASK_BYID_FAIL, DELETE_TASK_BYID_LOAD, DELETE_TASK_BYID_SUCCESS, DONE_TASKS_FAIL, DONE_TASKS_LOAD, DONE_TASKS_SUCCESS, EDIT_TASK_FAIL, EDIT_TASK_LOAD, EDIT_TASK_SUCCESS, GET_TASK_BYID_FAIL, GET_TASK_BYID_LOAD, GET_TASK_BYID_SUCCESS, GET_TASKS_FAIL, GET_TASKS_LOAD, GET_TASKS_SUCCESS } from "../ActionTypes/TaskActionTypes"

const initialState = {
    load: false,
    success: null,
    error: null,
    tasks: [],
    task: {},
    deletedTask: {}
}

const TaskReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_TASKS_LOAD:
        return { ...state, load: true };

      case GET_TASKS_SUCCESS:
        return { ...state, load: false, success: true, tasks: payload };

      case GET_TASKS_FAIL:
        return { ...state, success: null, load: false, error: payload };

      case GET_TASK_BYID_LOAD:
        return { ...state, load: true };

      case GET_TASK_BYID_SUCCESS:
        return { ...state, load: false, success: true, task: payload };

      case GET_TASK_BYID_FAIL:
        return { ...state, success: null, load: false, error: payload };

      case DELETE_TASK_BYID_LOAD:
        return { ...state, load: true };

      case DELETE_TASK_BYID_SUCCESS:
        return { ...state, load: false, success: true, deletedTask: payload };

      case DELETE_TASK_BYID_FAIL:
        return { ...state, success: null, load: false, error: payload };

      case ADD_TASK_LOAD:
        return { ...state, load: true };

      case ADD_TASK_SUCCESS:
        return { ...state, load: false, success: true };

      case ADD_TASK_FAIL:
        return { ...state, success: null, load: false, error: payload };

      case EDIT_TASK_LOAD:
        return { ...state, load: true };

      case EDIT_TASK_SUCCESS:
        return { ...state, load: false, success: true };

      case EDIT_TASK_FAIL:
        return { ...state, success: null, load: false, error: payload };

      case DONE_TASKS_LOAD:
        return { ...state, load: true };

      case DONE_TASKS_SUCCESS:
        return { ...state, load: false, success: true };

      case DONE_TASKS_FAIL:
        return { ...state, success: null, load: false, error: payload };

      default:
        return state;
    }
}

export default TaskReducer;