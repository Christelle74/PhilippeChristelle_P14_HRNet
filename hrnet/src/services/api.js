import axios from 'axios'

/**
 * It fetches with axios the employees from the server and returns it
 * @async
 * @description links with backEnd
 * @param {string} url - The URL to download from:http://localhost:3001/employees
 * @return  {Promise}  The datas from the server
 */
async function getAllEmployeesService(){
    try {
        const response = await  axios.get('https://server-p14-hrnet-4cmutkqn0-christelle74.vercel.app/employees')
        //console.log(response.data)
        return response.data
    }
    catch(error){
        //console.log('request failed 404 error', error)
        throw error
    }
}


/**
 * It makes a POST request to the server, and returns the response data.
 * @param {object} datas - {added from the form: firstName, lastName etc}
 * @returns  {Promise} - New employee object
 */
async function addNewEmployeeService(datas){
    try{
    const response = await axios.post('https://server-p14-hrnet-4cmutkqn0-christelle74.vercel.app/employees', datas)
        //console.log(response.data)
        return response.data
    }
    catch(error){
        //console.log('request failed 404 error ',error)
        throw error
    }
}


/**
 * It takes an id as a parameter, and then it makes a delete request to the server, and then it returns
 * the response.data.
 * @param {string} id - the id of the employee to be deleted
 * @returns {Promise} The employee that was deleted
 */
async function deleteEmployeeService(id){
    try{
    const response = await axios.delete(`https://server-p14-hrnet-4cmutkqn0-christelle74.vercel.app/employees/${id}`, {id})
        //console.log(response.data)
        return response.data
    }
    catch(error) {
        //console.log(error);
        throw error
    }
}


export {getAllEmployeesService, addNewEmployeeService, deleteEmployeeService}