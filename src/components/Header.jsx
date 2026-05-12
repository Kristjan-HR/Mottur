import { Link } from "react-router-dom";
import logo from "../logo.png";

export default function Header() {
  return (
    <header>
      <Link to="/" aria-label="Forsíða">
        <img src={logo} className="logo" alt="Company logo" />
      </Link>
      <nav>
        <Link to="/tilbod">Vörutilboð</Link>
        <Link to="/um-okkur">Um okkur</Link>
        <Link to="/hafa-samband">Hafa samband</Link>
      </nav>
    </header>
  );
}
