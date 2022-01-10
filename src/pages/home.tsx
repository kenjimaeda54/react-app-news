import React from 'react';

export default function Home() {
  console.log('processo', process.env.REACT_APP_API_KEY);
  return <div>OLa mundo</div>;
}
