import { createSlice } from "@reduxjs/toolkit";
import datas from '../datas/datas.json'

const initialState = {
    employees :[...datas]
}

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee :  (state, {payload}) =>{
            const newEmployee = payload
            const employeesList = JSON.parse(localStorage.getItem('employees')) || []
            employeesList.push(newEmployee)
            localStorage.setItem('employees', JSON.stringify(employeesList))
            console.log(employeesList)
            
            return {...state, employees : employeesList}
        },
        getEmployee : (state) =>{
            const employees = JSON.parse(localStorage.getItem('employees')) || []
            console.log(employees)
            return {...state, employees: employees}
        }
    }
})

export const { addEmployee, getEmployee } = employeesSlice.actions
export default employeesSlice.reducer