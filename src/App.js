import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Company = lazy(() => import('./pages/Company'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Expertise = lazy(() => import('./pages/Expertise'));
const Visuals = lazy(() => import('./pages/Visuals'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/visuals" element={<Visuals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
