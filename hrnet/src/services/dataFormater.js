
/**
 * @class
 * @description class to format employees datas
 */
export default class EmployeesDatasFormater {
    
    /**
   * The function takes in an object, and then assigns the values of the object to the properties of
   * the class.
   * @param {Object} datas - employees datas
   */
    constructor(datas) {
        this.datas = datas.map((data)=>({
            ...data, 
            firstName:data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1).toLowerCase(),
            lastName : data.lastName.charAt(0).toUpperCase() + data.lastName.slice(1).toLowerCase(),
            birthdate : new Date( data.birthdate).toISOString().substring(0,10),
            startDate : new Date( data.startDate).toISOString().substring(0,10),
            department : data.department,
            street : data.street.toLowerCase(),
            city : data.city.charAt(0).toUpperCase() + data.city.slice(1).toLowerCase(),
            state : data.state,
            zipcode : data.zipcode
        }));
    console.log(this.datas)

}}