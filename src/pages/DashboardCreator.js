import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import NewRecipeForm from "../components/NewRecipeForm";
import Error from "./Error";

const DashboardCreators = () => {
    const { isAuthenticated, user, isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />
    }
    if (!isAuthenticated || !user) {
        return (
            <Error />
        );
    }
    return (
        <NewRecipeForm />

    );
};

export default DashboardCreators;
