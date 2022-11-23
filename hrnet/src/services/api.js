import axios from 'axios'

/**
 * It fetches with axios the employees from the server and returns it
 * @async
 * @description links with backEnd
 * @param {string} url - The URL to download from:http://localhost:3001/employees
 * @return  {Promise}  The datas from the server
 */
async function getAllEmployeesService(){
    return await axios.get('https://server-p14-hrnet-h4vrxz1ym-christelle74.vercel.app/employees')
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        return error.message
    })
}


/**
 * It makes a POST request to the server, and returns the response data.
 * @param {object} datas - {added from the form: firstName, lastName etc}
 * @returns  {Promise} - New employee object
 */
async function addNewEmployeeService(datas){
    return await axios.post('https://server-p14-hrnet-h4vrxz1ym-christelle74.vercel.app/employees', datas)
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        return error.message
    })
}


/**
 * It takes an id as a parameter, and then it makes a delete request to the server, and then it returns
 * the response.data.
 * @param {string} id - the id of the employee to be deleted
 * @returns {Promise} The employee that was deleted
 */
async function deleteEmployeeService(id){
    return await axios.delete(`https://server-p14-hrnet-h4vrxz1ym-christelle74.vercel.app/employees/${id}`, {id})
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
        return error
    })
}


export {getAllEmployeesService, addNewEmployeeService, deleteEmployeeService}