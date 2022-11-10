import { configureStore} from "@reduxjs/toolkit";
import employeesReducer from "../features/employeesSlice"


/* Creating a store with the reducer and middleware. */
const store = configureStore({
  reducer : {
    employees: employeesReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false})
})
export default store