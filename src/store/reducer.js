import { combineReducers } from 'redux-immutable'
import { reducer as herderReaducer } from '../common/header/store';

const reducer = combineReducers({
	header: herderReaducer
})

export default reducer;