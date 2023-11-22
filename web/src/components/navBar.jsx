import React from "react";
import { Icon } from "@iconify/react";
import { useAuthContext } from "../contexts/auth-context";
import { logoutUser } from "../services/api-service";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


function NavBar() {
  const { user, onLogout } = useAuthContext();

  function logout() {
    logoutUser().then(() => {
      onLogout();
    });
  }

  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <strong>Money Saver</strong>
        </Link>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            {user ? (
              <div className="d-flex align-items-center">
                {user.avatar && (
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: "30px" }}
                  />
                )}
                <Link to="/profile" className="btn btn-sm btn-danger d-flex align-items-center me-2">
                  Profile
                </Link>
                <Link to="/" onClick={logout} className="btn btn-sm btn-danger d-flex align-items-center me-2">
                  Logout
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <Link to="/login" className="btn btn-sm btn-primary me-2">
                  Login
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
