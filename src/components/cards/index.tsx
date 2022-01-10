import React from 'react';
import Style from './style.module.css';
import Bob from '../../assets/bobo.jpeg';

export default function Card() {
  return (
    <article className={Style.container}>
      <img className={Style.imgTop} src={Bob} alt="logo top car" />
      <h1 className={Style.title}>Crianca cai do avaiao</h1>
      <time className={Style.date}> 123434 </time>
    </article>
  );
}
