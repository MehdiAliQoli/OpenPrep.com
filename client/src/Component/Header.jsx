import { Link } from "react-router-dom";
import "./header.css";
import { useEffect , useState } from "react";
function Header() {
  const [scroll , setScroll] = useState(false);

    useEffect(
      ()=>{
        const handleScroll = ()=>{
          setScroll(window.scrollY >90)
      }
      window.addEventListener("scroll" , handleScroll);

      return ()=>{
        window.removeEventListener("scroll" , handleScroll);
      }
      

 }     ,[]);
  return (
    <>
      <header className="header">
        <nav className="navbar-transparent">
          <div className="header-top">
            <div className="logo">
              <Link to="/">
              Open<span>Prep</span>
              </Link>
              
            </div>
  
          </div>
          <ul className={scroll ? "nav-links-scrolled" : "nav-links"}>
            <li>
              <Link to="/dashboard" className="nav-link">
                <button className="nav-btn">
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                  </svg>
                  Dashboard
                </button>
              </Link>
            </li>
            <li>
              <Link to="/courses" className="nav-link">
                <button className="nav-btn">
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                  </svg>
                  Courses
                </button>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <button className="nav-btn">
                  <svg
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  About
                </button>
              </Link>
            </li>
          </ul>
          <div className="auth-buttons">
           <Link to= "/auth">
           <button className="btn-primary">Sign Up</button>
           </Link> 
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
