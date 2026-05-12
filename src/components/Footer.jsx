import logo from "../logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <img src={logo} className="logo" alt="Company logo" />
      </div>
      <div>
        <h4>Opnunartímar</h4>
        <ul>
          <li>Mán til Fös: 09:00-17:00</li>
          <li>Laugardaga: 10:00-14:00</li>
          <li>Sunnudaga: Lokað</li>
        </ul>
      </div>
      <div>
        <h4>Fylgdu okkur</h4>
        <nav className="socials" aria-label="Samfélagsmiðlar">
          <a href="https://facebook.com" aria-label="Facebook">Facebook</a>
          <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
          <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
        </nav>
      </div>
    </footer>
  );
}
