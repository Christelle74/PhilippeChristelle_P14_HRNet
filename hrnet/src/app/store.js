import { configureStore} from "@reduxjs/toolkit";
import employeesReducer from "../features/employeesSlice"


const store = configureStore({
  reducer : {
    employees: employeesReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false})
})
export default store