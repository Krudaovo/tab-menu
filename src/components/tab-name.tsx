import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../pages/index';
import { ContentTypes } from './content';

export default function TabName(
  { next, gatsby, docusaurus, astro, qwik, cuttlebelle }: ContentTypes
) {

  const stone400 = '#A8A29E';
  const stone200 = '#E7E5E4';
  const launguage = useContext(LanguageContext)

  const clickedChangeColor = () => {
    if (next) {
      const targetEl = document.getElementById('1')!;
      targetEl.style.backgroundColor = stone200;
    }
    if (!next) {
      const targetEl = document.getElementById('1')!;
      targetEl.style.backgroundColor = stone400;
    }
    if (gatsby) {
      const targetEl = document.getElementById('2')!;
      targetEl.style.backgroundColor = stone200;
    }
    if (!gatsby) {
      const targetEl = document.getElementById('2')!;
      targetEl.style.backgroundColor = stone400;
    }
    if (docusaurus) {
      const targetEl = document.getElementById('3')!;
      targetEl.style.backgroundColor = stone200;
    }
    if (!docusaurus) {
      const targetEl = document.getElementById('3')!;
      targetEl.style.backgroundColor = stone400;
    }
    if (astro) {
      const targetEl = document.getElementById('4')!;
      targetEl.style.backgroundColor = stone200;
    }
    if (!astro) {
      const targetEl = document.getElementById('4')!;
      targetEl.style.backgroundColor = stone400;
    }
    if (qwik) {
      const targetEl = document.getElementById('5')!;
      targetEl.style.backgroundColor = stone200;
    }
    if (!qwik) {
      const targetEl = document.getElementById('5')!;
      targetEl.style.backgroundColor = stone400;
    }
    if (cuttlebelle) {
      const targetEl = document.getElementById('6')!;
      targetEl.style.backgroundColor = stone200;
    }
    if (!cuttlebelle) {
      const targetEl = document.getElementById('6')!;
      targetEl.style.backgroundColor = stone400;
    }
  };
  return (
    <>
      <ul className='relative left-1/2 -translate-x-1/2 w-full h-11 flex justify-evenly items-center bg-stone-400'>
        {launguage.map(lang =>
          <React.Fragment key={lang.id}>
            <li
              onClick={() => clickedChangeColor()}
              id={lang.id.toString()}
              className={`${lang.name} w-full h-full flex`}>
              <p className='text-stone-800 m-auto cursor-default'>{lang.name}</p>
            </li>
          </React.Fragment>
        )}
      </ul>
    </>
  );
};