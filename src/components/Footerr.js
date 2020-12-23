import React from 'react'
import './Footerr.css'
import { Card, Col, Row } from 'antd';
import { FacebookFilled } from '@ant-design/icons';
import { BackTop } from 'antd';


function Footerr() {
    return (
        <div className='footer-container'>
            <h1>About Us</h1>
            <div className='footer-wrapper'>
                <div className='member'>
                    <img className='img-foot' id='phong' src={process.env.PUBLIC_URL + 'images/Phong.jpg'} />
                    <div className='name'>
                        <span>Phạm Xuân Phong</span>

                        <a href='https://www.facebook.com/whisperwind.ir/'><FacebookFilled /></a>
                    </div>
                </div>
                <div className='member1'>
                    <img className='img-foot' id='hoang' src={process.env.PUBLIC_URL + 'images/Hoang.jpg'} />
                    <div className='name'>
                        <span>Bùi Việt Hoàng</span>
                        &nbsp;
                        <a href='https://www.facebook.com/profile.php?id=100023378111950'><FacebookFilled /></a>
                    </div>
                </div>
                <div className='member1'>
                    <img className='img-foot' id='duke' src={process.env.PUBLIC_URL + 'images/duke.jpg'} />
                    <div className='name'>
                        <span>Đỗ Văn Đức</span>
                        &nbsp;
                        <a style={{ float: 'right' }} href='https://www.facebook.com/typh.16.hps/'><FacebookFilled /></a>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <BackTop>
                    <div className='style'>UP</div>
                </BackTop>
            </div>

        </div>
    )
}

export default Footerr
