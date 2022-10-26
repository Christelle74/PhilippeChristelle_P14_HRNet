import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employeesList :[
        {
            firstName: '',
            lastName: '',
            birthdate: '',
            startDate: '',
            department: '',
            street: '',
            city:'',
            state:'',
            zipcode:'',
        }
    ]
}

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee :  (state, {payload}) =>{
            state.employeesList.push(payload)
        }
    }
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer