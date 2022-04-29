import { combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import comments from './comments';
import auth from "./auth";
import message from "./message";

const rootReducer = combineReducers({
    comments,
    auth,
    message,
    toastr: toastrReducer
})

export default rootReducer;
  