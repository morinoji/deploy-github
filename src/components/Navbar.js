import React from 'react'
import { Menu,Button } from 'antd'
import 'antd/dist/antd.css'
import './Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
const reFresh=()=>{
    window.location.href='/';
}
    return (
        <div className='container-fluid'>
            <div className='header-unScroll'>
                <div>
                <Link to='/' className='navLogo' onClick={reFresh}>
                        Cổ Phục Việt Nam
                    </Link>
                </div>
                <Menu theme='' className='navMenu' mode="horizontal"  >
                    <Menu.Item onClick={reFresh} className='navItem' key="1"><Link to='/'>Home</Link></Menu.Item>
                    <Menu.Item className='navItem' key="3"><Link to='/Document'>Document</Link></Menu.Item>
                    <Button className='navButton' style={{padding:'0 30px'}}><Link to='/' >
                        Đăng Ký
                    </Link></Button>
                </Menu>
                
            </div>
        </div>
    );
}

export default Navbar;
