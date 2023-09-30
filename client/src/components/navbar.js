import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
const Navbar = () => {
  const [cookies, setCookies, removeCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    removeCookies("access_token", { path: "/" });
  };

  return (
    <>
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="navbar">
        <div className="nav-items">
          <Link className="link-item" to="/">
            Home
          </Link>
          {!cookies.access_token ? (
            <>
              <Link className="link-item" to="/register">
                Register
              </Link>
              <Link className="link-item" to="/login">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link className="link-item" to="/post">
                Create Post
              </Link>
              <Link className="link-item" onClick={logout}>
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
