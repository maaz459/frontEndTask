import React from 'react';
import './BottomText.css'
import { Row, Col } from 'antd'
import Seperator from './../../../assets/images/seperator.svg'
const BottomText = (props) => {
    return (
        <div className="FontBelowMainDisplayPage">
            <Row justify="center" className="textBelowMainDisplay text-center" >
                <Col span={24}> <p className="question">{props.heading}</p> </Col>
                <Col span={24}><img src={Seperator}></img></Col>
                <Col span={14}><p className="customize">{props.text}</p></Col>
            </Row>
        </div>
    );
}

export default BottomText;