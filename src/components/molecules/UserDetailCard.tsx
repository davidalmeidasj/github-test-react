import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';

interface UserDetailCardProps {
    avatarUrl: string;
    children: React.ReactNode;
}

const UserDetailCard: React.FC<UserDetailCardProps> & {
    Body: React.FC<{ children: React.ReactNode }>;
    Title: React.FC<{ children: React.ReactNode }>;
    Text: React.FC<{ children: React.ReactNode }>;
    ListGroup: React.FC<{ children: React.ReactNode }>;
    ListGroupItem: React.FC<{ children: React.ReactNode }>;
} = ({ avatarUrl, children }) => {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={avatarUrl} />
                {children}
            </Card>
        </Col>
    );
};

UserDetailCard.Body = ({ children }) => {
    return <Card.Body>{children}</Card.Body>;
};

UserDetailCard.Title = ({ children }) => {
    return <Card.Title>{children}</Card.Title>;
};

UserDetailCard.Text = ({ children }) => {
    return <Card.Text>{children}</Card.Text>;
};

UserDetailCard.ListGroup = ({ children }) => {
    return <ListGroup className="list-group-flush">{children}</ListGroup>;
};

UserDetailCard.ListGroupItem = ({ children }) => {
    return <ListGroup.Item>{children}</ListGroup.Item>;
};

export default UserDetailCard;
