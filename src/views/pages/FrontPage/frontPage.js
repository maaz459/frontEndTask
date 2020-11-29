import React from 'react';
import { Col, Row, Button } from 'antd'
import './frontPage.css'
import CustomHeader from './../Layout/CustomHeader';
import Group_410 from './../../assets/images/Group_410.png'
import nextBtn from './../../assets/images/next-btn.svg'
import prevBtn from './../../assets/images/prev-btn.svg'
import ArtWorkCard from './../Utils/ArtWorkCard/ArtWorkCard';
import artImages from './../../assets/images/artWorkCards/artImagesExport'
import BottomText from './../Utils/BottomText/bottomText';
import Component97 from './../../assets/images/Component97_2x.png'
import CartCard from './../Utils/CartCards/CartCard';
import images from './../../assets/images/CartImages/ExportCartImages';
import framingSteps from './../../assets/images/customFramings/exportFramings';
import Impressive from '../Utils/impressiveImages/Impressive';
import ChoosingUs from './../Utils/choosingus/ChoosingUs'
import ReviewField from './../Utils/ReviewFiels/reviewField';
import Blogs from './../Utils/Blogs/Blog';
import Footer from './../Layout/Footer'
const { image1, image2, image3, image4, image5, image6 } = images
const { custom_framing1, custom_framing2, custom_framing3 } = framingSteps
const { Group1, Group2, Group3, Group4, Group5, Group6 } = artImages

const artWorkData = [
    { name: "Original Art", image: Group1 },
    { name: "Object", image: Group2 },
    { name: "Textile", image: Group3 },
    { name: "Jersey", image: Group4 },
    { name: "Photography", image: Group5 },
    { name: "Something Else", image: Group6 }
]
const cartData = [
    { name: "Dover", image: image1, type: "Start Framing" },
    { name: "Marquette", image: image2, type: "Start Framing" },
    { name: "Wren", image: image3, type: "Start Framing" },
    { name: "Mercer", image: image4, type: "Add To Cart" },
    { name: "Everett", image: image5, type: "Add To Cart" },
    { name: "Mandalay", image: image6, type: "Add To Cart" }
]
const customFramingStepsData = [
    { image: custom_framing1, text: "Select your frame", width: "100%", insideText: "Range of Custom Framing Choices", class: "insideText" },
    { image: custom_framing2, text: "Upload your photo or artwork and send", width: "100%", insideText: "Upload your image or photo", class: "insideText" },
    { image: custom_framing3, text: "We build custom frame and ship to you", width: "90%", insideText: "Prepared frame is shipped", class: "insideText3" },


]



const FrontPage = (props) => {
    return (
        <>
            <CustomHeader {...props} />
            <div style={{ backgroundColor: "white" }} className="container-fluid mt-5">
                <div className="container-fluid">
                    {/* Main Page Display when Page Opens */}
                    <div className="MainDisplayPage text-center">
                        <Row>
                            <Col style={{ backgroundColor: "black" }} xl={11} lg={11} md={11} sm={24} xs={24} >
                                <img
                                    src={Group_410}
                                    alt="MainImage"
                                    style={{ maxWidth: "100%", minHeight: "100%", position: "relative" }}
                                />;
                            <Col xl={3} lg={3} md={3} sm={3} xs={3} style={{ position: "absolute", bottom: 0, right: 0 }}>
                                    <img src={prevBtn}
                                        style={{ maxWidth: "100%" }}
                                    ></img>
                                    <img src={nextBtn}
                                        style={{ maxWidth: "100%" }}

                                    ></img>
                                </Col>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>

                                <Row style={{ paddingTop: "20%", paddingLeft: "10%" }}>
                                    <Col span={20}>
                                        <p className="rightMenuHeading">Custom Frames to Tell Your Unique Story</p>
                                    </Col>
                                    <Col className="rightMenuPara" span={15}>
                                        <p style={{ paddingLeft: "5%" }} >We make it simple, hassle-free and affordable for you to share your story with custom frames!</p>
                                    </Col>
                                    <Col style={{ paddingTop: "10%" }} sm={24} xs={24} lg={10}>
                                        <button className="startFramingButton">Start Framing</button>
                                    </Col>
                                </Row>

                            </Col>
                            <Col style={{ paddingTop: "15%" }} xl={1} lg={1} md={1} sm={24} xs={24}>
                                <p className="textFacebook" >Facebook   Instagram   Twitter</p>
                            </Col>
                        </Row>
                    </div>
                    {/* Text Below Main Display */}
                    <BottomText heading="What You Wish To Frame?" text="Customize your frame to fit artworks, photos and many more!" />
                    {/* Art Work Cards */}
                    <div className='ArtCards'>
                        <Row >
                            {artWorkData.map(d => {
                                return <Col className="mx-auto" lg={3} xl={3} md={3} sm={10} xs={10}><ArtWorkCard data={d}></ArtWorkCard></Col>

                            })}
                        </Row>


                    </div>
                    {/* Text Below ArtWork Cards */}
                    <BottomText heading="Our Featured Products" text="Browse through our range of featured products" />
                    {/* Cart Items */}
                    <div className="CartImages">
                        <Row>
                            <Col style={{ overflow: "hidden" }} lg={9} xl={9} md={9} sm={24} xs={24}>
                                <div className="CartImageHover">

                                    <img class="cartBigImage" style={{ maxWidth: "100%" }} src={Component97} alt="" />
                                    <div class="frameBox">
                                    </div>
                                </div>
                            </Col>
                            <Col lg={15} xl={15} md={15} xs={24} sm={24}>
                                <Row className="mt-4">
                                    {cartData.map(d => {
                                        return <Col className="mx-auto my-auto" lg={7} md={7} sm={10} xs={10}><CartCard name={d.name} image={d.image} type={d.type} /></Col>

                                    })}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    {/* Text Below Cart Items */}
                    <BottomText heading="custom framing Steps" text="True custom framing made truly simple." />
                    {/* Framing Steps */}
                    <div className="customFramingSteps">
                        <Row>
                            {customFramingStepsData.map(d => {
                                return <Col
                                    lg={8}
                                    xl={8}
                                    md={8}
                                    sm={24}
                                    xs={24}
                                    className="text-center"
                                >
                                    <img
                                        style={{ maxWidth: d.width }}
                                        src={d.image}></img>
                                    <div className={d.class}><p>{d.insideText}</p></div>
                                    <p className="framingText">{d.text}</p>
                                </Col>
                            })}
                        </Row>

                    </div>
                    {/* Framing Button */}
                    <div className="framingButton">
                        <Row style={{ paddingTop: "5%" }} className="text-center" justify="center">
                            <Col span={24} >
                                <button className="startFramingButton2">Start Framing</button>
                            </Col>
                        </Row>
                    </div>
                    {/* Text Below Framing Button */}
                    <BottomText heading="Our Impressive Works" text="Design A Custom Frame For Photos, Art, And More." />
                    {/* Impressive Menu */}
                    <Impressive />
                    {/* Choosing Us */}
                    <ChoosingUs />
                    {/* {Text Below Choosing} */}
                    <BottomText heading="That’s Why Our Clients Love Us" text="Read what our clients have to say about our frames" />
                    {/* Reviews Texts */}
                    <ReviewField />
                    {/* TextBelow Reviews */}
                    <BottomText heading="Our Blog" text="We offer numerous custom framing options which enable you to create high-quality frames in simple steps." />
                    {/* Blogs */}
                    <Blogs />
                    {/* Footer */}

                </div>
            </div>
            <Footer />
        </>

    );
}

export default FrontPage;
