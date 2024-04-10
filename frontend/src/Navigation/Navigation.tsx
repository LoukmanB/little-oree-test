// Libraries imports
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components imports
import { Login } from "../pages/Login/Login";
import { Products } from "../pages/Products/Products";

// Services imports
import { useGetUserAuthInfo } from "../services/useGetUserAuthInfo";

//Other imports
import { useAppSelector } from "../redux/store/hook";

export const Navigation: React.FC = () => {
  const { getUserAuthInfo } = useGetUserAuthInfo();

  const { userAuthInfo } = useAppSelector((states) => states);

  // At the opening of the portail
  useEffect(() => {
    // Get user authentication information from local storage if they exist.
    getUserAuthInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !userAuthInfo?.userToken ? (
    <Router>
      <Routes>
        <Route path="/*" element={<Login />} />
      </Routes>
    </Router>
  ) : (
    <Router>
      {/* You don't need to use an exact prop on <Route path="/"> anymore. 
      This is because all paths match exactly by default. 
      If you want to match more of the URL because you have child routes use a trailing * as in <Route path="users/*">. */}
      <Routes>
        <Route path="/*" element={<Products />} />
      </Routes>
    </Router>
  );
};
