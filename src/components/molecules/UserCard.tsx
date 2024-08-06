import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

interface UserCardProps {
    children: React.ReactNode;
    imgSrc: string;
}

const UserCard: React.FC<UserCardProps> & {
    Body: React.FC<{ children: React.ReactNode }>;
    Title: React.FC<{ children: React.ReactNode }>;
    Text: React.FC<{ children: React.ReactNode }>;
} = ({ children, imgSrc }) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={imgSrc} />
                {children}
            </Card>
        </Col>
    );
};

UserCard.Body = ({ children }) => {
    return <Card.Body>{children}</Card.Body>;
};

UserCard.Title = ({ children }) => {
    return <Card.Title>{children}</Card.Title>;
};

UserCard.Text = ({ children }) => {
    return <Card.Text>{children}</Card.Text>;
};

export default UserCard;
