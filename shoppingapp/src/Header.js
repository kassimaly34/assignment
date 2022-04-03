import "./styles.css";
import user from "./user.png";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div className="header">
      <h1>WebiX Ltd</h1>
      <p className="navMenu">
        <Link to="/">home</Link>
        <Link to="/Services">services</Link>
        <Link to="/Support">support</Link>
      </p>
      <Link to="/Signin">
      <button>
        <img src={user} width="20px" alt="user icon" />
        Signin
      </button>
      </Link>

     
    </div>
  );
}
