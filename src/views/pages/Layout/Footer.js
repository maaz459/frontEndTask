import React from 'react';
import { Row, Col } from 'antd'
import playstore from './../../assets/images/playstore.png'
import {
    FacebookFilled,
    TwitterSquareFilled,
    YoutubeFilled,
    InstagramFilled,
    AppleOutlined,
} from "@ant-design/icons"
import './Footer.css'
const Footer = () => {
    return (
        <div className="background1">
            <Row className="mt-4 text-center" >
                <Col className="mx-auto" lg={6} xl={6} md={6} sm={24} xs={24}>
                    <Row className="text-center">
                        <Col className="iconsText" span={13}>Get The App</Col>
                        <Col span={13}>
                            <Row justify="center" className="mt-2">
                                <Col span={6}> <AppleOutlined
                                    href=""
                                    size={10}
                                    style={{ fontSize: 25 }}

                                />
                                </Col>
                                <Col span={6}>
                                    <Col span={12}> <img style={{ maxWidth: "100%" }} src={playstore}></img>


                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="iconsText" span={13}>Follow Us</Col>
                        <Col span={13}>
                            <Row className="mt-2">
                                <Col className="mx-auto" span={3}> <TwitterSquareFilled
                                    href=""
                                    size={10}
                                    style={{ fontSize: 25 }}

                                />
                                </Col>
                                <Col className="mx-auto" span={3}> <FacebookFilled
                                    href=""
                                    size={10}
                                    style={{ fontSize: 25 }}

                                />
                                </Col>
                                <Col className="mx-auto" span={3}> <InstagramFilled
                                    href=""
                                    size={10}
                                    style={{ fontSize: 25 }}

                                />
                                </Col></Row>
                        </Col>
                        <Col className="iconsText" span={13}>Get Inspiration</Col>
                    </Row>

                </Col>
                <Col span={15}>


                </Col>
            </Row>
            <div className="End">© 2020 index.</div>



        </div>
    );
}

export default Footer;


{/* <Col span={6}>
<h4>
    <strong>Help and Information</strong>
</h4>
<br />
<a className="text-left" href="#">
    Help
</a>
<br />
{/* <a href="#">Track Order</a>
<br /> */}

//  <a href="#">Careeer at DressUp</a>
// <br />
// <a href="#">Investor Sites</a>
// </Col>
// <Col span={11}>
// <span>Get exclusive order and update</span>
// <br />
// <Search
//     style={{ width: "70%" }}
//     placeholder="Enter your email"
//     enterButton="Submit"
//     size="large"

// />
// <br />
// <FacebookFilled
//     href=""
//     size={20}
//     style={{ fontSize: 40, marginTop: 10, marginLeft: 60 }}

// />
// <TwitterSquareFilled
//     href=""
//     size={20}
//     style={{ fontSize: 40, marginTop: 10, marginLeft: 10 }}
// />
// <YoutubeFilled
//     href=""
//     size={20}
//     style={{ fontSize: 40, marginTop: 10, marginLeft: 10 }}
// />
// <InstagramFilled
//     href=""
//     size={20}
//     style={{ fontSize: 40, marginTop: 10, marginLeft: 10 }}
// />
// </Col>
// <h7 style={{ marginLeft: "510px" }}>
// <b>@ 2020 CopyRights DressUp.com </b>
// </h7> 