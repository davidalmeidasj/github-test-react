import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import UserDetailCard from '@components/molecules/UserDetailCard';
import RepoTable from '@components/molecules/RepoTable';
import { useUserDetails, useUserRepos } from '@hooks/useGitHubApi';

const UserDetail: React.FC = () => {
    const { username } = useParams<{ username: string }>();

    if (!username) {
        return <Navigate to="/" />;
    }

    const { user, loading: userDetailsLoading } = useUserDetails(username);
    const { repos, loading: userReposLoading } = useUserRepos(username);

    if (userDetailsLoading || userReposLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {user && (
                <UserDetailCard avatarUrl={user.avatar_url}>
                    <UserDetailCard.Body>
                        <UserDetailCard.Title>{user.login}</UserDetailCard.Title>
                        <UserDetailCard.Text>ID: {user.id}</UserDetailCard.Text>
                        <UserDetailCard.Text>Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></UserDetailCard.Text>
                        <UserDetailCard.Text>Created At: {new Date(user.created_at).toLocaleDateString()}</UserDetailCard.Text>
                    </UserDetailCard.Body>
                    <RepoTable repos={repos} />
                </UserDetailCard>
            )}
        </div>
    );
};

export default UserDetail;
