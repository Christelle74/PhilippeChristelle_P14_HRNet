import React, {useEffect, useState} from 'react';
import { Table, Input} from 'antd';
import { columns } from '../datas/tableColumns';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployee } from '../features/employeesSlice';
import { employeesFormatedDatas } from '../services/provider';


const datas = employeesFormatedDatas()
console.log(datas)
/**
 * Creation of the table of all employees
 * @component
 * @returns {JSX.Element} - EmployeeTable component
 */
const EmployeeTable = () => {
    const dispatch = useDispatch()
    //const employees = useSelector(state=>state.employees.employees)
    console.log(datas)
    
    useEffect(() => {
        if(datas.length >0) dispatch(getEmployee(datas))
    
    }, [dispatch])

    /**
     * global search
     */
    const [filterTable, setFilterTable] = useState(null);
    const onSearch = (value) => {
        const filterData = datas.filter((employee) => Object.keys(employee).some((k) => String(employee[k])
          .toLowerCase()
          .includes(value.toLowerCase())));
        setFilterTable(filterData);
      };

    return (
        <>
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
                    dataSource={filterTable == null ? datas : filterTable} 
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
        </>
    );
};

export default EmployeeTable;