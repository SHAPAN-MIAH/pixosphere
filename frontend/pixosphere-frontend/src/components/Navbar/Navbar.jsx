import "./Navbar.css";
import { IoGridOutline } from "react-icons/io5";
import { GrNotification } from "react-icons/gr";
// import { TbMessageDots } from "react-icons/tb";
// import { BiMessageDots } from "react-icons/bi";
// import { BiMessageSquareDots } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrSearch } from "react-icons/gr";
import { FiHome } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";
import { TbTable } from "react-icons/tb";
// import { TfiBriefcase } from "react-icons/tfi";

import { BiBriefcase } from "react-icons/bi";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img width={40} src="logo.png" alt="" />
            {/* Pixosphere */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex me-auto" style={{ position: "relative" }}>
              <input
                className="form-control me-2 shadow-none"
                type="search"
                placeholder=" Search Pixosphere"
                aria-label="Search"
                style={{ borderRadius: "30px", paddingLeft: "30px" }}
              />
              <button
                className="btn"
                style={{ position: "absolute" }}
                type="submit"
              >
                <GrSearch />
              </button>
            </form>

            <ul
              className="navbar-nav navbar_nav1 me-auto  mb-2 mb-lg-0"
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "40%",
              }}
            >
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FiHome />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                {/* <TfiBriefcase /> */}
                <BiBriefcase />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <RiGraduationCapLine />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <TbTable />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav  mb-2 mb-lg-0 " style={{paddingLeft: "5%"}}>
              <li
                className="nav-item dropdown"
                style={{
                  margin: "0px 10px",
                }}
              >
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <CgProfile />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="nav-item"
                style={{
                  margin: "0px 10px",
                }}
              >
                <a className="nav-link" href="#">
                  {/* <TbMessageDots /> */}
                  {/* <BiMessageDots /> */}
                  {/* <BiMessageSquareDots /> */}
                  <BiMessageRounded />
                </a>
              </li>

              <li
                className="nav-item dropdown"
                style={{
                  margin: "0px 10px",
                }}
              >
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <GrNotification />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown"
                style={{
                  marginLeft: "10px",
                }}
              >
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IoGridOutline />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
