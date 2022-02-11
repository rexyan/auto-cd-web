import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'antd';


import {
    CarouselContent,
} from './style'

import {actionCreator} from './store'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const Index = (props) => {
    return (
        <Carousel>
            <div>
			  <h3 style={contentStyle}>1</h3>
			</div>
			<div>
			  <h3 style={contentStyle}>2</h3>
			</div>
        </Carousel>
    )
}


const mapStateToProps = (state) => {
    return {}
}

const mapDispathToProps = (dispatch) => {
    return {}
}


export default connect(mapStateToProps, mapDispathToProps)(Index);