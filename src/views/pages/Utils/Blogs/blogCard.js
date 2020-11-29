import React from 'react';
import { Row, Col } from 'antd';
import './Blogs.css'
const BlogCard = (props) => {
    return (
        <div>
            <Row>
                <Col className="mx-auto" span={11}> <img style={{ maxWidth: "100%" }} src={props.image} alt="" /></Col>
                <Col className="mx-auto" span={11}>
                    <Row>
                        <Col span={24}>
                            <h1 className="category">{props.category}</h1>
                        </Col>
                        <Col span={24} >
                            <h1 className="BlogTitle">{props.title}</h1>
                        </Col>
                        <Col span={24}>
                            <Row>
                                <Col className="BlogBy" span={12}>{props.postBy}</Col>
                                <Col className="BlogBy" span={12}>{props.date}</Col>
                            </Row>
                        </Col>
                        <Col span={24} >
                            <p className="BlogText">{props.text}</p></Col>
                        <Col span={24}>
                            <button className="readMore">Read More</button>

                        </Col>
                    </Row>
                </Col>

            </Row>
        </div>
    );
}

export default BlogCard;