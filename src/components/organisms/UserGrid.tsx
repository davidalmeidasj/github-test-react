import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import UserCard from '@components/molecules/UserCard';
import AppButton from '@components/atoms/AppButton';
import { useUsers } from '@hooks/useGitHubApi';
import {User} from "../../services/GitHubService";
import AppPagination from "@components/atoms/Pagination";

interface UserGridProps {
    users: User[];
    onUserClick: (login: string) => void;
}

const UserGrid: React.FC<UserGridProps> = ({ users, onUserClick }) => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(0);
    const since = page * 45 + 1;
    const { users: paginatedUsers, loading } = useUsers(since);

    const handleButtonClick = (login: string) => {
        navigate(`/${login}/details`);
    };

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {paginatedUsers.map((user) => (
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
            <AppPagination page={page} onPageChange={handlePageChange} />
        </>
    );
};

export default UserGrid;
