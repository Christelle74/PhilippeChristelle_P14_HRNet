import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { getAllEmployeesService, addNewEmployeeService } from "../services/api";



export const  addNewEmployees = createAsyncThunk('employees/addNewEmployees', async (datas, thunkAPI) => {
    try { 
        const data = await addNewEmployeeService(datas)
        console.log(data)
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
        console.log(data)//recupère les datas du fichier json
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
    isLoading:false
}

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addInList: (state, {payload}) => {
            state.employeesList.push(payload)
        },
        deletEmployee :(state, {payload})=>{
            state.employeesList = state.employeesList.filter((employee) => employee.id !== payload.id)
        }
    }, 
    extraReducers: (builder) => {
        builder
        //addNewEmployee
        .addCase(addNewEmployees.rejected, (state) => {
            state.isLoading = false
        })
        .addCase(addNewEmployees.pending, (state) => {
            state.isLoading = true
        })
        .addCase(addNewEmployees.fulfilled, (state, {payload}) => {
            state.isLoading = false
            console.log('okokok',payload)
            const newEmployee = payload
            newEmployee.id=nanoid()
            state.employeesList.push(newEmployee)
            
        })
        //getTableEmployees
        .addCase(getAllEmployees.rejected, (state) => {
            state.isLoading = false
        })
        .addCase(getAllEmployees.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllEmployees.fulfilled, (state, {payload}) => {
            state.isLoading = false
            console.log('okokok',payload)//recupère les données du fichier json
            state.employeesList = payload
        })
    }
})

export const { deletEmployee } = employeesSlice.actions
export default employeesSlice.reducer