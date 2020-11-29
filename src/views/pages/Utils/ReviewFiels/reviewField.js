import React from 'react';
import Client from './../../../assets/images/ReviewImages/clientImg.png'
import Group614 from './../../../assets/images/ReviewImages/Group614.svg'
import Group615 from './../../../assets/images/ReviewImages/Group615.svg'
import rightArrow from './../../../assets/images/ReviewImages/rightArrow.svg'
import rightSide from './../../../assets/images/ReviewImages/rightSide.svg'
import { Row, Col } from 'antd'
import './ReviewField.css'
const ReviewField = () => {
    return (<div>
        <Row className="mt-5">
            <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                <img style={{ maxWidth: "100%" }} src={Client} alt="" />
            </Col>
            <Col className="my-auto py-auto mx-2" xl={15} lg={15} md={15} sm={15} xs={15}>
                <Row>
                    <Col span={24}>
                        <h1 className="ReviewHeading">Jeremy Crouse</h1>
                    </Col>
                    <Col span={24} className="ReviewerWork">(Graphic Designer)</Col>
                    <Col span={24} className="ReviewText">
                        <span ><img style={{ width: "3%", padding: "0%", margin: "0%" }} src={Group614}></img>I must say that it is the best framing service online. They are not only affordable but deliver the finest quality frames within a quick time frame. I ordered an oversized frame of an artwork that they delivered with professionalism and perfection. Highly recommended! <img style={{ width: "3%", marginLeft: "10%" }} src={Group615} alt="" /></span></Col>

                    <Col className="mt-2" span={6}>
                        <Row>
                            <Col lg={3} xl={3} sm={6} xs={6}>
                                <img style={{ maxWidth: "100%" }} src={rightArrow} alt="" />
                            </Col>
                            <Col span={1}>
                                <span>{"|"}</span>
                            </Col >
                            <Col lg={3} xl={3} sm={6} xs={6}>
                                <img style={{ maxWidth: "100%" }} src={rightSide} alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Col>



        </Row>
    </div>);
}

export default ReviewField;