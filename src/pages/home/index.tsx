import React from 'react';
import Card from '../../components/cards';
import CustomModal from '../../components/modal';
import Style from './style.module.css';

export default function Home() {
  return (
    <main className={Style.container}>
      <div className={Style.wrapIcons}>
        <CustomModal title="ola mundo" subtitle="subtitle" photo="bobEsponja" />
      </div>
      <h1 className={Style.title}>Seu saite de noticias</h1>
      <section className={Style.section}>
        <div className={Style.wrapContent}>
          <button type="button" className={Style.button}>
            <Card />
          </button>
        </div>
      </section>
    </main>
  );
}
