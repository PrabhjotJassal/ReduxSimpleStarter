import { combineReducers } from 'redux';

import BookReducer from './reducer_books'
import SelectBook from './reducer_selectBook'

const rootReducer = combineReducers({
	books: BookReducer,
	selectedBook: SelectBook
});

export default rootReducer;
