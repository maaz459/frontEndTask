import React from 'react';
import BlogCard from './blogCard';
import PMYQLT from './../../../assets/images/Blogs/PMYQLT2.png'
import PMYQH2 from './../../../assets/images/Blogs/PMYQH2.png'
import { Row, Col } from 'antd'

const blogData = [
    {
        title: "A Very Anthropologie Holiday with Jodie Harrison",
        text: "One of my favorite illustrators, Dan who goes by the creative name of Roach Graphics,...",
        image: PMYQH2,
        category: "Category Blog",
        postBy: "Admin",
        date: "30/03/2020"
    },
    {
        title: "A Very Anthropologie Holiday with Jodie Harrison",
        text: "One of my favorite illustrators, Dan who goes by the creative name of Roach Graphics,...",
        image: PMYQLT,
        category: "Category Blog",
        postBy: "Admin",
        date: "30/03/2020"
    },
]

const Blogs = () => {
    return (
        <div>
            <Row className="ml-2 mt-5">
                {blogData.map(d => {
                    return <Col lg={11} xl={11} md={11} sm={24} xs={24}>
                        <BlogCard
                            image={d.image}
                            title={d.title}
                            text={d.text}
                            category={d.category}
                            postBy={d.postBy}
                            date={d.date}
                        /></Col>

                })}
            </Row>
        </div>
    );
}

export default Blogs;