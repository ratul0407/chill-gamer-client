import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} />;
}

export default PrivateRoute;
