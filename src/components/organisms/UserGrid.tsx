import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import UserCard from '@components/molecules/UserCard';
import AppButton from '@components/atoms/AppButton';
import AppPagination from '@components/atoms/Pagination';
import {User} from "../../services/GitHubService";

interface UserGridProps {
    users: User[];
    loading: boolean;
    onUserClick: (login: string) => void;
    onPageChange: (newPage: number) => void;
    page: number;
}

const UserGrid: React.FC<UserGridProps> = ({ users, loading, onUserClick, onPageChange, page }) => {
    const navigate = useNavigate();

    const handleButtonClick = (login: string) => {
        navigate(`/${login}/details`);
    };

    return (
        <>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <Row xs={1} md={2} className="g-4">
                    {users.map((user) => (
                        <UserCard key={user.id} imgSrc={user.avatar_url}>
                            <UserCard.Body>
                                <UserCard.Title>ID: {user.id}</UserCard.Title>
                                <UserCard.Text>Login: {user.login}</UserCard.Text>
                                <AppButton onClick={() => handleButtonClick(user.login)}>
                                    View Details
                                </AppButton>
                            </UserCard.Body>
                        </UserCard>
                    ))}
                </Row>
            )}
            <AppPagination page={page} onPageChange={onPageChange} />
        </>
    );
};

export default UserGrid;
