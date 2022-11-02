import EmployeesDatasFormater from "./dataFormater";
//import datas from '../datas/datas.json'


const datasToFormat = JSON.parse(localStorage.getItem('employees'))
console.log(datasToFormat)

export  function employeesFormatedDatas() {
    let employeeDatas = []
    employeeDatas =  datasToFormat
    console.log(employeeDatas)
    const newEmployeeDatas = new EmployeesDatasFormater(employeeDatas)
    console.log(newEmployeeDatas.datas)
    return newEmployeeDatas.datas
}