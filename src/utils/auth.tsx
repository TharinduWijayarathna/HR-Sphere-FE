import React, { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = <P extends object>(Component: ComponentType<P>): React.FC<P> => {
    const AuthComponent: React.FC<P> = (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            if (!localStorage.getItem('token')) {
                navigate('/login');
            }
        }, [navigate]);

        return <Component {...props} />;
    };

    return AuthComponent;
};

export default withAuth;
