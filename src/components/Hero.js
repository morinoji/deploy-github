import { Button } from 'antd'
import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'

function Hero() {
    return (
        
        
        <div className='hero-container'>
        
            <div className='hero-content'>
                <h1>Tinh Hoa Nghìn Năm</h1>
                <Button><Link to='/Document'>Tới Ngay</Link></Button>

                
            </div>
            <img className='mayKhoi' src={process.env.PUBLIC_URL + 'images/Van.png'}/>
        </div>
        
    )
}

export default Hero
