import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/sat1.jpg`} alt="" />
      </Link>
      <header>
        <h2> Kenstate Allied </h2>
        <p><a href="mailto:kenstatellc@gmail.com">kenstatellc@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Company</h2>
      <p>Digital at your service
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/expertise') ? <Link to="/expertise" className="button">Check out </Link> : <Link to="/about" className="button">our Company</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Kenstate Allied; <Link to="/">kenstatellc@gmail.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
