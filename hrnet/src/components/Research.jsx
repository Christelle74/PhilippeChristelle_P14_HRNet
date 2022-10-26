import React, {useState} from 'react';
import { Input } from 'antd';


const { Search } = Input;



const Research = () => {
    const [searchedText, setSearchedText] = useState("")
    return (
        <div style={{display:'flex', alignItems:'center'}}> 
            <span style={{marginRight:5}}>Research</span>
            <Search
                placeholder="Search here..."
                allowClear
                style={{ width: 200}}
                onSearch={(value)=>{setSearchedText(value)}}
            />
        </div>
    );
};

export default Research;