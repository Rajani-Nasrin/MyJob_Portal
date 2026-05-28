// import { Navigate } from "react-router-dom";

// function AuthRoute({ children }) {
//   const isLoggedIn = localStorage.getItem("isLoggedIn");
//   return isLoggedIn === "true" ? children : <Navigate to="/login" replace />;
// }

// export default AuthRoute;

import { Navigate } from "react-router-dom";

function AuthRoute({ children }) {
  const user = localStorage.getItem("user");

  // NOT LOGGED IN
  if (!user) {
    return <Navigate to="/loginapi" replace />;
  }

  // LOGGED IN
  return children;
}

export default AuthRoute;