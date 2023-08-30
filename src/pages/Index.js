import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Kenstate Allied company website. '
    + 'Digital at your service.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Company Profile</Link></h2>
          <p>
            A responsive website developed using JS and React.
          </p>
        </div>
      </header>
      <p> Check out our  <Link to='/Company'>Profile</Link>,
        or you can check out our {' '}
        <Link to="/expertise">expertise</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/visuals">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/mldangelo/-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
