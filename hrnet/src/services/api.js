import axios from 'axios'


async function getAllEmployeesService(){
    return await axios.get('http://localhost:3001/employees')
    .then((response) => {
        // handle success
        console.log(response.data);
        return response.data
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}



async function addNewEmployeeService(datas){
    return await axios.post('http://localhost:3001/employees', {datas}  )
    .then((response) => {
        // handle success
        console.log(response.data);
        return response.data
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}




export {getAllEmployeesService, addNewEmployeeService}