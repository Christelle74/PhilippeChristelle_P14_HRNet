import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { getAllEmployeesService, addNewEmployeeService, deleteEmployeeService } from "../services/api";



export const  addNewEmployees = createAsyncThunk('employees/addNewEmployees', async (datas, thunkAPI) => {
    try { 
        const data = await addNewEmployeeService(datas)
        //console.log(data)
        return data

    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllEmployees = createAsyncThunk('employees/getAllEmployees', async (thunkAPI) => {
    try { 
        const data= await getAllEmployeesService()
        //console.log(data)
        return data
        
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (thunkAPI) => {
    try { 
        const data= await deleteEmployeeService()
        //console.log(data)
        return data
        
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



const initialState = {
    employeesList :[],
    loading:false,
    error: null,
    success:false
}

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        deletEmployee :(state, {payload})=>{
            state.employeesList = state.employeesList.filter((employee) => employee.id !== payload.id)
        }
    }, 
    extraReducers: (builder) => {
        builder
        //addNewEmployee
        .addCase(addNewEmployees.rejected, (state, {payload}) => {
            state.error=payload
            state.success=false
        })
        .addCase(addNewEmployees.pending, (state) => {
            state.loading = true
        })
        .addCase(addNewEmployees.fulfilled, (state, {payload}) => {
            state.loading = false
            state.success = true
            const newEmployee = payload
            newEmployee.id=nanoid()
            state.employeesList.push(newEmployee)
        })
        //getTableEmployees
        .addCase(getAllEmployees.rejected, (state, {payload}) => {
            state.error=payload
            state.loading=false
        })
        .addCase(getAllEmployees.pending, (state) => {
            state.loading = true
        })
        .addCase(getAllEmployees.fulfilled, (state, {payload}) => {
            state.loading = false
            state.success = true
            state.employeesList = payload
        })
    }
})

export const { deletEmployee } = employeesSlice.actions
export default employeesSlice.reducer