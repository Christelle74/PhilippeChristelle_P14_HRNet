import React, {useEffect, useState} from 'react';
import { Table, Input, Spin} from 'antd';
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
    const {loading} = useSelector(state=>state.employees)
    const [data, setData] =useState([])

    useEffect(() => {
        setData(employees.map((employee)=>new Employee(employee)))
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
            <FormItem style={{display:'flex', justifyContent: 'flex-end', alignItems:'center', margin:'50px 20px 32px 25px'}}>
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
                        defaultPageSize:10, 
                        defaultCurrent:1,
                        showSizeChanger:true,
                        size: 'small',
                        position: ['bottomCenter'],
                        showTotal: (total, range) => (
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`
                        )
                    }} 
                    scroll={{y: 350}} 
                    loading={{ indicator:<div style={{height:'1rem'}}><Spin size="large" tip="Be patient, datas are coming !" /></div>, spinning: loading}}
                >
                </Table>
            </div>
        </>
        
    );
    
};

export default EmployeesTable;