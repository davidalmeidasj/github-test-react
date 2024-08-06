import React from 'react';
import Table from 'react-bootstrap/Table';

interface Repo {
    id: number;
    name: string;
    html_url: string;
}

interface RepoTableProps {
    repos: Repo[];
}

const RepoTable: React.FC<RepoTableProps> = ({ repos }) => {
    return (
        <Table responsive="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>URL</th>
            </tr>
            </thead>
            <tbody>
            {repos.map((repo) => (
                <tr key={repo.id}>
                    <td>{repo.id}</td>
                    <td>{repo.name}</td>
                    <td><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a></td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default RepoTable;
