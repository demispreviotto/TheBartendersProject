import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default ProtectedRoute;
