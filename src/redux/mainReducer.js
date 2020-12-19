import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn51187000Reducer from '../features/SignIn51187000/redux/reducers'
import SignUp12186999Reducer from '../features/SignUp12186999/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn51187000: SignIn51187000Reducer,
SignUp12186999: SignUp12186999Reducer,

});