import axios from 'axios'

async function getAllEmployeesService(){
    return await axios.get('datas.json')
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
    return await axios.post('datas.json', {...datas}  )
    .then((response) => {
        // handle success
        console.log(response);
        return response
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

export {getAllEmployeesService, addNewEmployeeService}