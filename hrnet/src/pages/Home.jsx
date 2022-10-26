import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Card } from 'antd';
import Logo from '../components/Logo';

/**
 * Creation of the home page connexion with logo and navigation
 * @component
 * @returns {JSX.Element} - Home component
 */
const Home = () => {
    return (
        <main style={{width:'100%'}}>
            <Logo/>
            <div style={{display:'flex', flexDirection: 'column', alignItems:'center', width: "100%"}}>
                <li >
                    <Link to="/createemployee" className='userCard'>
                        <Card style={{ width: 300, marginTop: 50 }}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>
                            <p style={{marginTop: 20, color:'#5a6f08', fontSize:16, fontWeight:700 }}>Administrator</p>
                        </Card>
                    </Link>
                </li>
                <li >
                    <Link to="" className='userCard'>
                        <Card style={{ width: 300, marginTop: 50 }}>
                            <Avatar  size={50}>User</Avatar>
                            <p style={{ marginTop: 20, color:'#5a6f08', fontSize:16, fontWeight:700 }}>User</p>
                        </Card>
                    </Link>
                </li>
            </div>
        </main>
    );
};

export default Home;