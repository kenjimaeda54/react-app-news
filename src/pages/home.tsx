import React from 'react';
import Card from '../components/cards';
import Style from './style.module.css';

export default function Home() {
  return (
    <main className={Style.container}>
      <h1 className={Style.title}>Seu saite de noticias</h1>
      <section className={Style.section}>
        <div className={Style.wrapContent}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}
