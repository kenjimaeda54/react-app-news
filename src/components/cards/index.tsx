import React from 'react';
import Style from './style.module.css';

export default function Card() {
  return (
    <article className={Style.container}>
      <h1 className={Style.tile}>Crianca cai do avaiao</h1>
      <p>
        Rafael Natal is officially OUT of the U.S. Open ... the tennis legend said Tuesday its just
        too damn unsafe for him to travel to America during the COVID-19 pandemic.
        The situation is very complicated worldwide, Nadal wrote in a statementThe…
      </p>
      <time className={Style.date}> 123434 </time>
    </article>
  );
}
