import {combineReducers} from 'redux';
import app from './app';
import players from './players';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    app,
    players
});

export default allReducers
