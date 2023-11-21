import React from 'react';

export type ContentTypes = {
  next: boolean
  gatsby: boolean
  docusaurus: boolean
  astro: boolean
  qwik: boolean
  cuttlebelle: boolean
}

export default function Content(
  { next, gatsby, docusaurus, astro, qwik, cuttlebelle }: ContentTypes
) {
  return (
    <div className='pt-7 w-full h-96 relative left-1/2 -translate-x-1/2 bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800'>
      {next ? (<div id='next-content' className='absolute top-0 left-0'>this is next.js content</div>) : (<></>)}
      {gatsby ? (<div id='gatsby-content' className='absolute top-0 left-0'>this is gatsby content</div>) : (<></>)}
      {docusaurus ? (<div id='docusaurus-content' className='absolute top-0 left-0'>this is docusaurus content</div>) : (<></>)}
      {astro ? (<div id='astro-content' className='absolute top-0 left-0'>this is astro content</div>) : (<></>)}
      {qwik ? (<div id='qwik-content' className='absolute top-0 left-0'>this is qwik content</div>) : (<></>)}
      {cuttlebelle ? (<div id='cuttlebelle-content' className='absolute top-0 left-0'>this is cuttlebelle content</div>) : (<></>)}
    </div>
  );
};