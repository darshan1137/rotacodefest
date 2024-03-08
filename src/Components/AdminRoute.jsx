import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const AdminRoute = ({ user, route, children }) => {
  console.log(user);
  if (user != false) {
    return <Navigate to={route} replace />;
  }

  return children;
};

AdminRoute.propTypes = {
  user: PropTypes.string,
  route: PropTypes.string,
  children: PropTypes.node,
};

export default AdminRoute;
