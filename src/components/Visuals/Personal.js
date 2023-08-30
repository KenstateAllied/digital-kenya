import React from 'react';
import Table from './Table';
import data from '../../data/visuals/personal';

const PersonalVisuals = () => (
  <>
    <h3>Some Visuals about our Company</h3>
    <Table data={data} />
  </>
);

export default PersonalVisuals;
