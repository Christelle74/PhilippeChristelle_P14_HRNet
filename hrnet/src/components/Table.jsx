import React, {useEffect, useState} from 'react';
import { Table, Input} from 'antd';
import { columns } from '../datas/tableColumns';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployees } from '../features/employeesSlice';
import DataFormater from "../services/dataFormater"


/**
 * Creation of the table of all employees
 * @component
 * @returns {JSX.Element} - EmployeeTable component
 */
const EmployeeTable = () => {
    const dispatch = useDispatch()
    const employees = useSelector(state=>state.employees.employeesList)
    console.log(employees) //recupère les données json
    
    const [data, setData] =useState([])
    

    useEffect(() => {
        setData(employees.map((employee)=>new DataFormater(employee)))
        console.log(employees)
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
        <React.Fragment key={data.id}>
            <div style={{display:'flex', justifyContent: 'flex-end', alignItems:'center', margin:'60px 20px 32px 25px'}}>
                <Input.Search 
                    placeholder="Search by..."
                    allowClear
                    style={{ width: 200}}
                    onSearch ={onSearch}
                />
            </div>
            <div style={{margin: 20}}>
                <Table 
                    columns={columns}
                    rowKey={(record) => record.id}
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
                />
            </div>
        </React.Fragment>
    );
};

export default EmployeeTable;