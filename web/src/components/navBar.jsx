import { Icon } from "@iconify/react";
import { useAuthContext } from "../contexts/auth-context";
import { logoutUser } from "../services/api-service";
import { Link } from "react-router-dom";

function NavBar() {
  const { user, onLogout } = useAuthContext();

  function logout() {
    logoutUser().then(() => {
      onLogout();
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <strong>Money Saver</strong>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {user ? (
              // Mostrar estos elementos si el usuario ha iniciado sesión
              <li className="nav-item">
                <div className="d-flex">
                  {user.avatar && (
                    <img
                      src={user.avatar}
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: "30px" }}
                    />
                  )}
                  <button
                    onClick={logout}
                    className="btn btn-sm btn-danger d-flex align-items-center"
                  >
                    <Icon className="me-1" icon="ant-design:logout-outlined" />
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              // Mostrar estos elementos si el usuario no ha iniciado sesión
              <li className="nav-item">
                <div className="d-flex">
                  <Link to="/login" className="btn btn-sm btn-primary me-2">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-sm btn-success">
                    Register
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
