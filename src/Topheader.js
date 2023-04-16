import "./App.css";
import logo from "./logo.svg";

function Topheader(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <img src={logo} height="30px" alt="logo" /> &nbsp;
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active navlinkhome"
                aria-current="page"
                href="/"
              >
                Welcome 
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            <button className="btn btn-outline-success" type="submit" formTarget="_blank">
            New Page
            </button>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Topheader;
