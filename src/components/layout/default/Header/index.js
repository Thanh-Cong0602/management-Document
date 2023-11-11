import { Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logobk from "../../../../assets/images/logobk.png";

import { useState, useEffect } from "react";

/*  icons */
import { FaUser } from "react-icons/fa";

/* local elements */
import { PulicRoutes } from "../../../../routes/Route";

const textNonUnderline = {
  color: "inherit",
  textDecoration: "none",
};

const Header = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    var user = localStorage.getItem("email");
    setUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        style={{ boxShadow: "0px 0px 5px 1px lightgray" }}
      >
        <Container>
          <Navbar.Brand>
            <Link style={textNonUnderline} to="/">
              <img
                style={{ width: "50px", height: "50px" }}
                src={logobk}
                alt="logobk"
              ></img>
              <strong>DOCUMENT MANAGEMENT</strong>
            </Link>
          </Navbar.Brand>
          <div className="d-flex flex-column">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="align-items-center" navbarScroll>
                <Nav className="px-3 py-2 align-items-center">
                  <Button variant="white">
                    <Link style={textNonUnderline} to="/account">
                      <FaUser></FaUser>
                      <p>{user}</p>
                    </Link>
                  </Button>
                  {!user && (
                    <Link style={textNonUnderline} to="/login">
                      Login
                    </Link>
                  )}
                  {user && (
                    <Link style={textNonUnderline} to="" onClick={handleLogout}>
                      Logout
                    </Link>
                  )}
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      {/* <Routes>
        {PulicRoutes.map((route, i) => {
          let Page = route.element;
          return <Route path={route.path} element={Page} key={i} />;
        })}
      </Routes> */}
    </>
  );
};

export default Header;
