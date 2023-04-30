import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";

const CreatorDashboard = () => {
    const { isAuthenticated, user, isLoading } = useAuth0();
if (isLoading){
    return <Loading/>
}
    // Check if user is authenticated and has the "creator" role
    if (!isAuthenticated || !user) {
    // if (!isAuthenticated || !user || !user["https://your-auth0-namespace/roles"].includes("creator")) {
        // Redirect to unauthorized page or display an error message
        return (
            <Error/>
            //     <h1>Unauthorized</h1>
            //     <p>You do not have permission to access this page.</p>
            // </Error>
        );
    }

    // Render the creator dashboard component
    return (
        <Profile/> //* Your creator dashboard content here */}
    );
};

export default CreatorDashboard;
