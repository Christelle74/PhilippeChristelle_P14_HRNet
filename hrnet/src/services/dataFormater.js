
/**
* @constructor
* @description class to format employees datas
* Represents an employee
* @param {string} firstName - The firstname of the employee.
* @param {string} lastName - The lastname of the employee.
* @param {string} birthdate - The birthdate of the employee.
* @param {string} startDate - The date the employee starts his job.
* @param {string} departement - The department where the employee is working.
* @param {string} street - The street adress of the employee.
* @param {string} city - The city adress of the employee.
* @param {string} state - The state where the employee is living.
* @param {number} zipcode - The zipcode of the city.
*/
export default class DataFormater {
    constructor({_id, firstName, lastName, birthdate, startDate, department, street, city, state, zipcode}) {
        this.id = _id
        this.firstName = this.formatName(firstName)
        this.lastName = this.formatName(lastName)
        this.birthdate = this.formatDate(birthdate)
        this.startDate = this.formatDate(startDate)
        this.department = this.formatName(department)
        this.street= this.formatName(street)
        this.city = this.formatName(city)
        this.state = state
        this.zipcode = zipcode
    }
    
    formatName(string){
        const stringLower = string.toLowerCase()
        const stringFormat = stringLower.replace(/(^\w{1})|(\s+\w{1})/g, x => x.toUpperCase())
        return stringFormat
    }
    formatDate(date){
        return new Date(date).toLocaleDateString("fr")
    }
}