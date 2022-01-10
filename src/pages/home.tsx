import React from 'react';
import Card from '../components/cards';
import Style from './style.module.css';

export default function Home() {
  return (
    <main className={Style.container}>
      <Card />
    </main>
  );
}
