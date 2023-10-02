import appointmentsReducer from "./reducers/appointmentsReducer";
//import mainReducer from "./reducers/combineAllReducers";
import {legacy_createStore as createStore} from 'redux'


const store = createStore(appointmentsReducer);

export default store;
