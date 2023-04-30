import { useAuth0 } from "@auth0/auth0-react";
import Profile from '../components/Profile'
import Error from '../components/Error'

const ClientDashboard = () => {
    const { isAuthenticated, user } = useAuth0();

    // Check if user is authenticated and has the "client" role
    if (!isAuthenticated || !user) {
    // if (!isAuthenticated || !user || !user["https://your-auth0-namespace/roles"].includes("client")) {
        // Redirect to unauthorized page or display an error message
        return (
            <Error/>
            //     <h1>Unauthorized</h1>
            //     <p>You do not have permission to access this page.</p>
        );
    }

    // Render the client dashboard component
    return (
            <Profile/>
            // Your client dashboard content here
    );
};

export default ClientDashboard;
