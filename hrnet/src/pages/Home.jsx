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
                <ul>
                    <li >
                        <Link to="/createemployee" className='userCard'>
                            <Card style={{ width: 300, marginTop: 50, backgroundColor:'#d6db99a9'}}>
                                <Avatar src="/avatar1.png" alt="avatar" size={60}/>
                                <h3 style={{marginTop: 20, color:'#5a6f06', fontSize:20, fontWeight:700 }}>Administrator</h3>
                            </Card>
                        </Link>
                    </li>
                    <li >
                        <Link to="" className='userCard'>
                            <Card style={{ width: 300, marginTop: 50, backgroundColor:'#d6db99a9' }}>
                                <Avatar  size={60} style={{color:'#3070ab', backgroundColor:'rgb(240, 239, 239)'}}>User</Avatar>
                                <h3 style={{ marginTop: 20, color:'#5a6f06', fontSize:20, fontWeight:700 }}>User</h3>
                            </Card>
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Home;