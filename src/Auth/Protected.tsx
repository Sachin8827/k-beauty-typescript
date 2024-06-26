import { Navigate } from "react-router-dom";
import { RouteProp } from "../Types/Types";

export const ProtectedRoute: React.FC<RouteProp> = ({ children, isLoggedIn }) => {

    return isLoggedIn ? <>{children}</> : <Navigate to={'/login'} />
}
export const PublicRoute: React.FC<RouteProp> = ({ children, isLoggedIn }) => {

    return !isLoggedIn ? <>{children}</> : <Navigate to={'/home'} />
}
