import {combineReducers} from 'redux';
import projectReducer from './Projects/projectReducer';


const rootReducer = combineReducers({
    project: projectReducer
})

export default rootReducer;