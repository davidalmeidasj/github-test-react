import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserGrid from '@components/organisms/UserGrid';
import UserDetail from '@pages/UserDetail';
import Header from '@components/organisms/Header';
import { useUsers } from '@hooks/useGitHubApi';

const App: React.FC = () => {
    const [page, setPage] = useState<number>(0);
    const since = page * 45 + 1;
    const { users, loading: usersLoading } = useUsers(since);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <Router>
            <Header />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={
                        <UserGrid
                            users={users}
                            loading={usersLoading}
                            onUserClick={(login) => window.location.href = `/${login}/details`}
                            onPageChange={handlePageChange}
                            page={page}
                        />
                    } />
                    <Route path="/:username/details" element={<UserDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
