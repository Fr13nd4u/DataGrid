import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Header</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="users">Users</Link>
      </nav>
    </div>
  );
}

export default Header;