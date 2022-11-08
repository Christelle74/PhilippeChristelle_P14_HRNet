
/**
 * @class
 * @description class to format employees datas
 */
export default class DataFormater {
    
    /**
   * The function takes in an object, and then assigns the values of the object to the properties of
   * the class.
   * @param {Object} data - employees datas
   */
    constructor({firstName, lastName, birthdate, startDate, department, street, city, state, zipcode}) {
        //this.firstName = firstName
        this.firstName = this.formatName(firstName)
        this.lastName = this.formatName(lastName)
        this.birthdate = this.formatDate(birthdate)
        this.startDate = this.formatDate(startDate)
        this.department = this.formatName(department)
        this.street= this.formatName(street)
        this.city = this.formatName(city)
        this.state = state
        this.zipcode = zipcode
    
    console.log(this.firstName)
    console.log(this.birthdate)
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