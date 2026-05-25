import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-8 sm:p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/books" className="link link-hover">
            Books
          </Link>
        </nav>
        <aside>
          <p>Copyright 2026 BookStore</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
