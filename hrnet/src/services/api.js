import axios from 'axios'

/**
 * It fetches with axios the employees from the server and returns it
 * @async
 * @description links with backEnd
 * @param {string} url - The URL to download from:http://localhost:3001/employees
 * @return  {Promise}  The datas from the server
 */
async function getAllEmployeesService(){
    return await axios.get('http://localhost:5000/employees')
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        alert("fail to access employees")
    })
}


/**
 * It makes a POST request to the server, and returns the response data.
 * @param {object} datas - {added from the form: firstName, lastName etc}
 * @returns  {Promise} - New employee object
 */
async function addNewEmployeeService(datas){
    return await axios.post('http://localhost:5000/employees', datas)
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        alert("fail to add employee")
    })
}


/**
 * It takes an id as a parameter, and then it makes a delete request to the server, and then it returns
 * the response.data.
 * @param {string} id - the id of the employee to be deleted
 * @returns {Promise} The employee that was deleted
 */
async function deleteEmployeeService(id){
    return await axios.delete(`http://localhost:5000/employees/${id}`, {id})
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        alert("fail to delete employee")
    })
}


export {getAllEmployeesService, addNewEmployeeService, deleteEmployeeService}