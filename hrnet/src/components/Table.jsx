import React, {useEffect, useState} from 'react';
import { Table, Input} from 'antd';
import { columns } from '../datas/tableColumns';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployees } from '../features/employeesSlice';
import Employee from "../services/employeeFormater"
import FormItem from 'antd/es/form/FormItem';

/**
 * Creation of the table displaying all employees
 * @component
 * @returns {JSX.Element} - EmployeeTable component
 */
const EmployeesTable = () => {
    const dispatch = useDispatch()
    const employees = useSelector(state=>state.employees.employeesList)
    const [data, setData] =useState([])
    
    useEffect(() => {
        setData(employees.map((employee)=>new Employee(employee)))
        //console.log(employees)
    }, [employees])

    useEffect(() => {
        dispatch(getAllEmployees())
    }, [dispatch])


    /**
     * global search
     */
    const [filterTable, setFilterTable] = useState(null);
    const onSearch = (value) => {
        const filterData = data.filter((employee) => Object.keys(employee).some((k) => String(employee[k])
            .toLowerCase()
            .includes(value.toLowerCase())));
        setFilterTable(filterData);
    };

    return (
        <>
            <FormItem style={{display:'flex', justifyContent: 'flex-end', alignItems:'center', margin:'60px 20px 32px 25px'}}>
                <Input.Search 
                    placeholder="Search by..."
                    allowClear
                    style={{ width: 200}}
                    onSearch ={onSearch}
                    
                />
            </FormItem>
            <div style={{margin: 20}}>
                <Table 
                    columns={columns}
                    rowKey={(employee) => employee.id}
                    dataSource={filterTable == null ? data : filterTable} 
                    size='middle' 
                    pagination={{
                        style:{marginTop:'30px'},
                        pageSize:10, 
                        showSizeChanger:true,
                        size: 'small',
                        position: ['bottomCenter'],
                        showTotal: (total, range) => (
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`
                        )
                    }} 
                    scroll={{y: 240}} 
                >
                </Table>   
            </div>
        </>
    );
    
};

export default EmployeesTable;