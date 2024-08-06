import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Github Application</Navbar.Brand>
                {location.pathname !== '/' && (
                    <Button variant="secondary" onClick={handleBackClick}>
                        Back
                    </Button>
                )}
            </Container>
        </Navbar>
    );
};

export default Header;
