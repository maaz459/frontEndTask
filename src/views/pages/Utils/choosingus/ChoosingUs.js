import React from 'react';
import { Row, Col } from 'antd'
import './Choosing.css'
import Photo from './../../../assets/images/choosingUs/photo.svg'
import Flower from './../../../assets/images/choosingUs/600636.png'
import FreeShiping from './../../../assets/images/choosingUs/freeShipping.svg'
import FreeReturn from './../../../assets/images/choosingUs/freeReturn.svg'
import DesignerAdvice from './../../../assets/images/choosingUs/designerAdvice.svg'
import priceIcon from './../../../assets/images/choosingUs/priceIcon.svg'

const shippingData = [
    { heading: "Ready to Use", subHeading: "We deliver ready to use frames build by hand shipped for Free at your doorstep", image: FreeShiping },
    { heading: "Enjoy Free Advice", subHeading: "Enjoy free online design advice from our creative team for custom framing", image: FreeReturn },
    { heading: "Lowest Price Guarantee", subHeading: "We guarantee to give you the lowest price for high-quality, unique framing", image: DesignerAdvice },
    { heading: "Free Returns", subHeading: "Don’t like your custom frame? We offer free returns and make frame that satisfies you!", image: priceIcon },

]

const ChoosingUs = () => {
    return (
        <div>
            <Row className="mt-5 text-center">
                <Col className="ml-2" lg={14} xl={14} md={14} sm={24} xs={24}>
                    <Row>
                        <Col span={24}>
                            <h1 className="ChooseHeading py-0 my-2">Why Choose Us</h1>
                            <p className="ChooseText py-0 my-0">we promise to provide you with the simplest and most affordable way to design custom frames with care!</p>
                        </Col>
                        <Col className="mt-3" span={21}>
                            <Row>
                                {shippingData.map(d => {
                                    return <Col className="mx-auto mt-2" xl={11} lg={11} md={11} sm={22} xs={22}>
                                        <Row >
                                            <Col className="py-auto my-auto" span={7}>
                                                <img style={{ maxWidth: "100%" }} src={d.image} alt="" />
                                            </Col>
                                            <Col span={2}></Col>
                                            <Col span={14}>
                                                <h1 className="subMenuHeading mb-3">{d.heading}</h1>
                                                <p className="subMenuText mt-2">{d.subHeading}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                })}





                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <Col className="my-5 text-center" lg={7} xl={7} md={7} xs={20} sm={20} >
                            <button className="chooseFraming">Start Framing</button>
                        </Col>
                    </Row>
                </Col >

                <Col className="text-center mb-5" lg={8} xl={8} md={8} sm={20} xs={20}>
                    <div className="ChooseUsFLower">
                        <img style={{ maxWidth: "100%" }} src={Photo}></img>
                        <img className="flower" style={{ maxWidth: "100%" }} src={Flower}></img>
                    </div>
                </Col>


            </Row>



        </div >
    );
}

export default ChoosingUs;