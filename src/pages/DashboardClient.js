import { useAuth0 } from "@auth0/auth0-react";
import Profile from '../components/Profile'
import Error from '../components/Error'

const DashboardClient = () => {
    const { isAuthenticated, user } = useAuth0();

    if (!isAuthenticated || !user) {
        return (
            <Error />
        );
    }

    return (
        <Profile />
    );
};

export default DashboardClient;
