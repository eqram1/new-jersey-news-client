import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
    const { author, details, image_url, title, rating, total_view, _id } = news;
    console.log(news)
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-3'
                        style={{
                            height: '60px',
                        }}
                        src={author.img}
                    ></Image>
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaShareAlt className='me-3'></FaShareAlt>
                    <FaBookmark></FaBookmark>
                </div>

            </Card.Header>
            <Card.Body>

                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 200 ?
                        <p>{details.slice(0, 200) + '...'}<Link to={`/news/${_id}`}>Read more</Link></p>
                        :
                        <p>{details}</p>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>

                </div>
            </Card.Footer>
        </Card >
    );
};

export default NewsSummaryCard;