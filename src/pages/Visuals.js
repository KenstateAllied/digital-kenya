import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';


import Personal from '../components/Visuals/Personal';


import Site from '../components/Visuals/Personal';


const Visuals = () => (
  <Main
    title="Visuals"
    description="Kenstate Allied"
  >
    <article className="post" id="Visuals">
      <header>
        <div className="title">
          <h2><Link to="/visuals">Visuals</ Link></h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Visuals;
