import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR
} from "../actions/actionTypes";
const initState = {
  loading: false,
  errorMsg: null
};
export default (state = initState, action) => {
  switch (action.type) {
    case ASYNC_ACTION_START:
      return {
        ...state,
        loading: true
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false,
        errorMsg: null
      };
    case ASYNC_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        errorMsg: action.msg
      };
    default:
      return state;
  }
};
