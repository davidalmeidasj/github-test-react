import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserGrid from '@components/organisms/UserGrid';
import UserDetail from '@pages/UserDetail';
import Header from '@components/organisms/Header';
import { useUsers } from '@hooks/useGitHubApi';

const App: React.FC = () => {
    const { users, loading: usersLoading } = useUsers(0); // Initial load

    return (
        <Router>
            <Header />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={
                        usersLoading ? (
                            <p>Loading users...</p>
                        ) : (
                            <UserGrid users={users} onUserClick={(login) => window.location.href = `/${login}/details`} />
                        )
                    } />
                    <Route path="/:username/details" element={<UserDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
