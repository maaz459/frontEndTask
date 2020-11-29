import React from 'react';
import { Row, Col } from 'antd'
import Component1 from './../../../assets/images/impressiveWorks/Component1.png'
import Component2 from './../../../assets/images/impressiveWorks/Component2.png'
import Component3 from './../../../assets/images/impressiveWorks/Component3.png'
import Component4 from './../../../assets/images/impressiveWorks/Component4.png'
import './Impressive.css'

const Impressive = () => {
    return (
        <div className="text-center">
            <Row >
                <Col style={{ overflow: "hidden" }} className="mx-auto" lg={11} xl={11} md={11} sm={24} xs={24}>
                    <div className="impressiveWrap">
                        <img className="impressiveImage" style={{ maxWidth: "100%" }} src={Component3}></img>
                        <div class="impressiveFrameBox">
                        </div>
                    </div>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Row >
                        <Col
                            style={{ overflow: "hidden", maxHeight: "250px" }}
                            className="mx-auto"
                            span={11}
                        >
                            <img className="rightSideImage"
                                style={{ maxWidth: "100%", maxHeight: "100%" }}
                                src={Component4}></img>
                        </Col>
                        <Col
                            style={{ overflow: "hidden", maxHeight: "250px" }}
                            className="mx-auto" span={11}>
                            <img className="rightSideImage"
                                style={{ maxWidth: "100%", maxHeight: "100%" }}
                                src={Component1}></img>
                        </Col>
                    </Row>
                    <Row >
                        <Col className="mx-auto my-4" span={22} style={{ overflow: "hidden", maxHeight: "300px" }}>
                            <img className="Component2" style={{ maxWidth: "100%", maxHeight: "100%" }} src={Component2}></img>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    );
}

export default Impressive;