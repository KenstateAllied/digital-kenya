import React, { useState, useEffect } from 'react';

const Time = () => {
  const [setTime] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1990-02-05T09:24:00');
    setTime(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{Time}</>;
};

const data = [
  {
    key: 'time',
    label: 'App Duration',
    value: <Time />,
  },
  {
    key: 'TECHNOLOGIES',
    label: 'TYPES',
    value: 10,
    link:
      'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  },
  {
    key: 'location',
    label: 'Company Location',
    value: 'ELDORET, KENYA',
  },
];
export default data;
