import React, {useState} from 'react';
import { Table, Input} from 'antd';
import { columns } from '../datas/tableColumns';
import { datas } from '../datas/tableDatas'
// Research from './Research';


const EmployeeTable = () => {
    const [searchedText, setSearchedText] = useState("")
    console.log(setSearchedText)
    return (
        <>
            <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center', margin:'60px 20px 32px 25px'}}>
                <div>
                    Showing ..to.. of .. entries
                </div>
                <Input.Search 
                    placeholder="Search here..."
                    allowClear
                    style={{ width: 200}}
                    onSearch={(value)=>{setSearchedText(value)}}
                    
                />
                {/* <Research/> */}
            </div>
            <div style={{margin: 20}}>
                
                <Table 
                    columns={columns}
                    dataSource={datas} 
                    size='middle' 
                    pagination={{pageSize:10, showSizeChanger:true}} 
                    scroll={{y: 240}} 
                />
            </div>
        </>
    );
};

export default EmployeeTable;