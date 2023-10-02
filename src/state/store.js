import appointmentsReducer from "./reducers/appointmentsReducer";
import {legacy_createStore as createStore} from 'redux'


const store = createStore(appointmentsReducer);

export default store;
