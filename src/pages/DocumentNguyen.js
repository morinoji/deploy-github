import React, {useState,useEffect} from 'react'
import './Document.css'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Lyemperor from '../components/Lyemperor'
import Lypeasant from '../components/Lypeasant'
import Leemperor from '../components/Leemperor'
import Lepeasant from '../components/Lepeasant'
import Tranemperor from '../components/Tranemperor'
import Tranpeasant from '../components/Tranpeasant'
import Nguyenemperor from '../components/Nguyenemperor'
import Nguyenpeasant from '../components/Nguyenpeasant'

const { SubMenu } = Menu;
function Document() {
const [click, setClick]= useState('7');

const handleClick = (e)=>{
    setClick(e.key);
}
useEffect(() => {
    window.scrollTo(0, 0)
  }, [click])
    return (
        <div className='document-container'>
            <div className='document-wrapper'>
                <div className='nav'>
                    <Menu
                        theme='light'
                        onClick={handleClick}
                        style={{ width: 256 }}
                        defaultOpenKeys={['sub4']}
                        selectedKeys={click}
                        mode="inline"
                    >
                        <SubMenu key="sub1"  title="Lý Triều">
                            <Menu.Item onClick={handleClick} key="1">Trang phục Hoàng Đế</Menu.Item>
                            <Menu.Item key="2">Thường phục</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2"  title="Trần Triều">
                            <Menu.Item key="3">Trang phục Hoàng Đế</Menu.Item>
                            <Menu.Item key="4">Thường phục</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3"  title="Lê Triều">
                            <Menu.Item key="5">Trang phục Hoàng Đế</Menu.Item>
                            <Menu.Item key="6">Thường phục</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4"  title="Nguyễn Triều">
                            <Menu.Item key="7">Trang phục Hoàng Đế</Menu.Item>
                            <Menu.Item key="8">Thường phục</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className='content'>
                {click==1? <Lyemperor/>:click==2? <Lypeasant/>:click==3? <Tranemperor/>:click==4? <Tranpeasant/>:click==5? <Leemperor/>:click==6? <Lepeasant/>:click==7? <Nguyenemperor/>:click==8? <Nguyenpeasant/>:<Lyemperor/>}
                </div>
            </div>
        </div>
    )
}

export default Document
