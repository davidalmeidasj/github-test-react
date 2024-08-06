import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

interface AppPaginationProps {
    page: number;
    onPageChange: (newPage: number) => void;
}

const AppPagination: React.FC<AppPaginationProps> = ({ page, onPageChange }) => {
    const renderPaginationItems = () => {
        let items = [];
        items.push(
            <Pagination.Item key={1} active={page === 0} onClick={() => onPageChange(0)}>
                1
            </Pagination.Item>
        );

        if (page > 1) {
            items.push(<Pagination.Ellipsis key="start-ellipsis" />);
        }

        for (let i = Math.max(1, page - 2); i <= page + 2; i++) {
            items.push(
                <Pagination.Item key={i + 1} active={page === i} onClick={() => onPageChange(i)}>
                    {i + 1}
                </Pagination.Item>
            );
        }

        items.push(<Pagination.Ellipsis key="end-ellipsis" />);
        items.push(
            <Pagination.Next key="next" onClick={() => onPageChange(page + 1)} />
        );

        return items;
    };

    return (
        <Pagination className="justify-content-center mt-4">
            <Pagination.First onClick={() => onPageChange(0)} />
            <Pagination.Prev onClick={() => onPageChange(Math.max(0, page - 1))} />
            {renderPaginationItems()}
        </Pagination>
    );
};

export default AppPagination;
