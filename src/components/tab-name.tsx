import React, { useContext } from 'react';
import { LanguageContext } from '../pages/index';

export default function TabName() {

  const launguage = useContext(LanguageContext)

  return (
    <>
      <ul className='flex '>
        {launguage.map(lang => {
          return (
            <li>{lang}</li>
          )
        })}
      </ul>
    </>
  );
};