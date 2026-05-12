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
        <nav className="socials">
          <a href="https://instagram.com">
            <div className="wrapper-instagram">
              <div>Instagram</div>
            </div>
          </a>
          <a href="https://tiktok.com">
            <div className="wrapper-tiktok">
              <div>TikTok</div>
            </div>
          </a>
          <a href="https://facebook.com">
            <div className="wrapper-facebook">
              <div>Facebook</div>
            </div>
          </a>
        </nav>
      </div>
    </footer>
  );
}
