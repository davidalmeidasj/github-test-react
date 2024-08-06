import React from 'react';
import Card from 'react-bootstrap/Card';

interface CardProps {
    title: string;
    text: string;
    imgSrc: string;
}

const AppCard: React.FC<CardProps> = ({ title, text, imgSrc }) => {
    return (
        <Card>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default AppCard;
