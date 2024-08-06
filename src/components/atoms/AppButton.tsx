import React from 'react';
import Button from 'react-bootstrap/Button';

interface AppButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({ onClick, children }) => {
    return <Button onClick={onClick}>{children}</Button>;
};

export default AppButton;
