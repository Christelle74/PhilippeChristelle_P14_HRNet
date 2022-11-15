import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewEmployees } from '../features/employeesSlice';
import { Form, Button, Input, Space, DatePicker, Select,  Divider, InputNumber } from 'antd';
import { states } from '../datas/statesList';
import { departments } from '../datas/departmentList';
import {Modal} from "modal-lib"

const {Option} = Select

/**
 * Creation of employee's create form 
 * @component
 * @returns {JSX.Element} - EmployeeForm component
 */
const EmployeeForm = () => {
    const dispatch = useDispatch()
    const allEmployees = useSelector((state)=>state.employees.employeesList)
    const [form] = Form.useForm();
    const [displayModal, setDisplayModal] = useState(false)
    const [componentSize, setComponentSize] = useState('small')
    const onFormLayoutChange = ({ size }) => {setComponentSize(size)};
    
    const onFinish=(values) =>{
        values.id = allEmployees.length + 1;
        dispatch(addNewEmployees({values}))
        setDisplayModal(true)
        form.resetFields()
    }
    
    const xButtonStyle ={
        "display" :"none"
    }
    const button2Style ={
        "display" :"none"
    }

    return (
    <>
        <Space direction="vertical" size='small'>
            
            <Form 
                form ={form}
                initialValues={{size: componentSize}}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                autoComplete='off'
                onFinish={onFinish}
                >
                <Form.Item  labelCol={{ span: 24 }} label="First Name" name='firstName' htmlFor='firstName' rules={[{required: true, message: 'Please enter the first name'}, {whitespace:true}, {min:3}]} hasFeedback>
                    <Input placeholder='Type a first name' name='firstName'/>
                </Form.Item>
                
                <Form.Item  labelCol={{ span: 24 }} label="Last Name" name='lastName'htmlFor='lastName' rules={[{required: true, message: 'Please enter the last name'}, {whitespace:true}, {min:3}]} hasFeedback>
                    <Input placeholder='Type a last name' name='lastName'/>
                </Form.Item>
                
                <Form.Item  labelCol={{ span: 24 }} label="Date of Birth" name='birthdate' htmlFor='birthdate' rules={[{required: true, message: 'Please enter a date of birth'}]} >
                    <DatePicker style={{width:'100%'}} picker="date"  format='DD/MM/YYYY' name='birthdate'/>
                </Form.Item>
                
                <Form.Item  labelCol={{ span: 24 }} label="Date of start" name='startDate' htmlFor='startDate' rules={[{required: true, message: 'Please enter a date'}]} >
                    <DatePicker style={{width:'100%'}} picker="date"  format='DD/MM/YYYY' name='startDate'/>
                </Form.Item>
            
            
                <Divider style={{border:'#5a6f06', color:'#5a6f06', fontSize:'16px', fontWeight:'700', marginTop:'50px'}} orientation="left">Address</Divider>
    
                <Form.Item  labelCol={{ span: 24 }} label="Street" name='street' htmlFor='street' rules={[{required: true, message: 'Please enter the street'},{whitespace:true}, {min:3}]} hasFeedback>
                    <Input  placeholder='Type a street'  name='street'/>
                </Form.Item>
                
                <Form.Item labelCol={{ span: 24 }} label="City" name='city' htmlFor='city' rules={[{required: true, message: 'Please enter the city'},{whitespace:true}, {min:3}]} hasFeedback>
                    <Input placeholder='Type a city' name='city'/>
                </Form.Item>
                
                <Form.Item labelCol={{ span: 24 }} label="State" name='state' htmlFor='state' rules={[{required: true, message: 'Please select a state'}]}>
                    <Select
                        placeholder="Choose a State"
                        allowClear
                        name='state'
                        aria-label='choose a state'
                        aria-expanded='true'
                        aria-owns='state'
                        aria-controls='state'
                        aria-activedescendant=""
                    >
                        {states.map((state) => (
                            <Option  value={state.name} key={state.abbreviation}>{state.name}</Option>
                        ))}
                    </Select>
                </Form.Item>
                
                <Form.Item labelCol={{ span: 24 }} label="Zip Code" name='zipcode' htmlFor='zipcode' rules={[{required: true, message: 'Please select a zip code', type: 'number', min: 0, max: 99999}]}>
                    <InputNumber style={{width:'100%'}} placeholder='Type a zip code' name='zipcode'/>
                </Form.Item>

                <Divider style={{border:'#5a6f06', color:'#5a6f06', fontSize:'16px', fontWeight:'700', marginTop:'50px'}} orientation="left">Department</Divider>
                
                <Form.Item labelCol={{ span: 24 }} label="department" wrapperCol={{ span: 24}} name='department' htmlFor='department' rules={[{required: true, message: 'Please select a department'}]}>
                    <Select
                        placeholder="Choose a department"
                        name='department'
                        aria-expanded='true'
                        aria-owns='department'
                        aria-controls='department'
                        aria-activedescendant=""
                    >
                        {departments.map((department) => (
                            <Option value={department.name} key={department.id}>{department.name}</Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item  wrapperCol={{ span: 24}}>
                    <Button block style={{background: '#5a6f06', color: 'white', width:'100%'}} htmlType="submit" >Save</Button>
                </Form.Item>
                <Modal 
                    // modalStyle={modalStyle} 
                    // modalHeaderStyle={modalHeaderStyle} 
                    // modalBodyStyle={modalBodyStyle} 
                    // modalFooterStyle={modalFooterStyle} 
                    xButtonStyle={xButtonStyle} 
                    footerButton2Style={button2Style} 
                    title="Confirmation" 
                    message="New employee created !" 
                    buttonText1="Ok"
                    //buttonText2={"Cancel"}
                    showModal={displayModal} 
                    hideModal={()=>setDisplayModal(false)} 
                />
            </Form>
            
        </Space>
    </>
    );
}


export default EmployeeForm