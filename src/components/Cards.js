import React from 'react'
import { Card } from 'antd';
import './Cards.css'
import { Link } from 'react-router-dom'

const { Meta } = Card;
function Cards() {

    return (
        <div className='card-container'>
            <h1>Các Triều Đại</h1>
            <div className='card-wrapper'>
                <Link to='/Document' >
                    <Card id='ly' hoverable className='card'
                        cover={<img alt="example" src={process.env.PUBLIC_URL + 'images/LyTrieu.jpg'} />} >
                        <Meta title="Lý Triều" description="" />
                    </Card>
                </Link>

                <div className='card-holder'>
                    <Link to='/DocumentTran' >
                        <Card id='tran' hoverable className='card'
                            cover={<img id='tranimg' alt="example" src={process.env.PUBLIC_URL + 'images/TranTrieu.jpg'} />} >
                            <Meta title="Trần Triều" description="" />
                        </Card>
                    </Link>
                </div>
                <div className='card-holder'>
                    <Link to='/DocumentLe'>
                        <Card hoverable className='card'
                            cover={<img id='tranimg' alt="example" src={process.env.PUBLIC_URL + 'images/LeTrieu.jpg'} />} >
                            <Meta title="Lê Triều" description="" />
                        </Card>
                    </Link>
                </div>
                <div className='card-holder'>
                    <Link to='DocumentNguyen'>
                        <Card hoverable className='card'
                            cover={<img id='tranimg' alt="example" src={process.env.PUBLIC_URL + 'images/NguyenTrieu.jpg'} />} >
                            <Meta title="Nguyễn Triều" description="" />
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cards
