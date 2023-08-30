import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Expertise/Education';
import Experience from '../components/Expertise/Experience';
import Skills from '../components/Expertise/Skills';
import Courses from '../components/Expertise/Courses';
import References from '../components/Expertise/References';

import courses from '../data/expertise/courses';
import degrees from '../data/expertise/degrees';
import work from '../data/expertise/work';
import { skills, categories } from '../data/expertise/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const Expertise = () => (
  <Main
    title="Expertise"
    description="Kenstate Allied's Portfolio. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <article className="post" id="expertise">
      <header>
        <div className="title">
          <h2><Link to="expertise">Expertise</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Expertise;
