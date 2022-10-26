import React, { useState } from 'react';
import { Form, Button, Input, Space, DatePicker, Select,  Divider, InputNumber, Modal } from 'antd';
import { states } from '../datas/statesList';
import { departments } from '../datas/departmentList';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../features/employeesSlice';

const {Option} = Select

const EmployeeForm = () => {
    
    const dispatch = useDispatch()
    const employees = useSelector(state => state.employees.employeesList)

    let id = 1
    if (employees.length) {
            id = Math.max(...employees.map(employee => employee.id))+1
    }

    console.log(employees)


    const [form] = Form.useForm();
    const [modaleVisible, setModaleVisible] = useState(false)
    const [componentSize, setComponentSize] = useState('small')
    const onFormLayoutChange = ({ size }) => {setComponentSize(size)};

    
    const onFinish=(values) =>{
        console.log('all Values', {values})
        setModaleVisible(true)
        form.resetFields()
        dispatch(addEmployee(values))
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
                <Form.Item  labelCol={{ span: 24 }} label="First Name" name='firstName' rules={[{required: true, message: 'Please enter the first name'}, {whitespace:true}, {min:3}]} hasFeedback>
                    <Input placeholder='Type a first name'/>
                </Form.Item>
                
                <Form.Item  labelCol={{ span: 24 }} label="Last Name" name='lastName' rules={[{required: true, message: 'Please enter the last name'}, {whitespace:true}, {min:3}]} hasFeedback>
                    <Input placeholder='Type a last name'  />
                </Form.Item>
                
                <Form.Item  labelCol={{ span: 24 }} label="Date of Birth" name='birthdate' rules={[{required: true, message: 'Please enter a date of birth'}]} >
                    <DatePicker style={{width:'100%'}} picker="date"/>
                </Form.Item>

                <Form.Item  labelCol={{ span: 24 }} label="Date of start" name='startDate' rules={[{required: true, message: 'Please enter a date'}]} >
                    <DatePicker style={{width:'100%'}} picker="date"/>
                </Form.Item>
            
            
                <Divider style={{border:'#5b8c00', color:'#5b8c00', fontSize:'14px', fontWeight:'bold', marginTop:'50px'}} orientation="left">Address</Divider>
    
                <Form.Item  labelCol={{ span: 24 }} label="Street" name='street' rules={[{required: true, message: 'Please enter the street'},{whitespace:true}, {min:3}]} hasFeedback>
                    <Input  placeholder='Type a street'   />
                </Form.Item>
                
                <Form.Item labelCol={{ span: 24 }} label="City" name='city' rules={[{required: true, message: 'Please enter the city'},{whitespace:true}, {min:3}]} hasFeedback>
                    <Input placeholder='Type a city'   />
                </Form.Item>
                
                <Form.Item labelCol={{ span: 24 }} label="State" name='state' rules={[{required: true, message: 'Please select a state'}]}>
                    <Select
                        placeholder="Choose a State"
                        allowClear
                    >
                        {states.map((state) => (
                            <Option  value={state.name} key={state.abbreviation}>{state.name}</Option>
                        ))}
                    </Select>
                </Form.Item>
                
                <Form.Item labelCol={{ span: 24 }} label="Zip Code" name='zipcode' rules={[{required: true, message: 'Please select a zip code', type: 'number', min: 0, max: 99999}]}>
                    <InputNumber style={{width:'100%'}} placeholder='Type a zip code'/>
                </Form.Item>

                <Divider style={{border:'#5b8c00', color:'#5b8c00', fontSize:'14px', fontWeight:'bold', marginTop:'50px'}} orientation="left">Department</Divider>
                
                <Form.Item labelCol={{ span: 24 }} label="" wrapperCol={{ span: 24}} name='department' rules={[{required: true, message: 'Please select a department'}]}>
                    <Select
                        placeholder="Choose a department"
                
                    >
                        {departments.map((department) => (
                            <Option value={department.name} key={department.id}>{department.name}</Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item  wrapperCol={{ span: 24}}>
                    <Button block style={{background: '#5b8c00', color: 'white', width:'100%'}} htmlType="submit" >Save</Button>
                </Form.Item>

                <Modal
                    centered
                    visible={modaleVisible}
                    onOk={() => setModaleVisible(false)}
                    cancelButtonProps={{ style: { display: "none" } }}
                    >
                    <p style={{fontSize:'20px', color:'#5a6f08', textAlign:'center' }}>New employee created !</p>
                </Modal>
                
            </Form>
            
        </Space>
    </>
    );
}


export default EmployeeForm