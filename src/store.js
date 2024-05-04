import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const currentFeelingScore = (state=0, action) => {
    if (action.type === 'SET_CURRENT_FEELING') {
        return action.payload;
    } else if (action.type === 'RESET_CURRENT_FEELING') {
        return 0;
    }
    return state;
}

const currentUnderstandingScore = (state=0, action) => {
    if (action.type === 'SET_CURRENT_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'RESET_CURRENT_UNDERSTANDING') {
        return 0;
    }
    return state;
}

const currentSupportScore = (state=0, action) => {
    if (action.type === 'SET_CURRENT_SUPPORT') {
        return action.payload;
    } else if (action.type === 'RESET_CURRENT_SUPPORT') {
        return 0;
    }
    return state;
}

const currentComments = (state='', action) => {
    if (action.type === 'SET_CURRENT_COMMENTS') {
        return action.payload;
    } else if (action.type === 'RESET_CURRENT_COMMENTS') {
        return '';
    }
    return state;
}


const store = createStore(combineReducers({
    currentFeelingScore,
    currentUnderstandingScore,
    currentSupportScore,
    currentComments
}), applyMiddleware(logger)
);

export default store;
