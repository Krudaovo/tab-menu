import React, { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { contentText } from '../gsap/animation';

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

  useEffect(() => {
    contentText('next-text');
  }, [next]);
  useEffect(() => {
    contentText('gatsby-text');
  }, [gatsby]);
  useEffect(() => {
    contentText('docusaurus-text');
  }, [docusaurus]);
  useEffect(() => {
    contentText('astro-text');
  }, [astro]);
  useEffect(() => {
    contentText('qwik-text');
  }, [qwik]);
  useEffect(() => {
    contentText('cuttlebelle-text');
  }, [cuttlebelle]);


  return (
    <div className='pt-7 w-full h-96 relative left-1/2 -translate-x-1/2 bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800'>
      {next ? (
        <>
          <StaticImage className='blur-sm absolute top-0 left-0 w-full h-full' src={'../images/nextjs.png'} placeholder={'blurred'} imgStyle={{ objectFit: 'cover' }} quality={100} alt={'nextjs'} />
          <div id='next-content' className='absolute top-0 left-0 p-4 w-full h-full'>
            <div className='w-full h-full p-2 border-[1px] border-stone-400'>
              <p className='next-text'>
                Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
              </p>
            </div>
          </div>
        </>
      ) : (<></>)}
      {gatsby ? (
        <>
          <StaticImage className='blur-sm absolute top-0 left-0 w-full h-full' src='../images/gatsby.png' placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt='gatsby' />
          <div id='gatsby-content' className='absolute top-0 left-0 p-4 w-full h-full'>
            <div className='w-full h-full p-2 border-[1px] border-stone-400'>
              <p className='gatsby-text'>
                Gatsby Cloud and Netlify Cloud are uniting!
                Netlify is offering all Gatsby Cloud customers easy migration paths to Netlify to unite two industry-leading platforms into one.
              </p>
            </div>
          </div>
        </>
      ) : (<></>)}
      {docusaurus ? (
        <>
          <StaticImage className='blur-sm absolute top-0 left-0 w-full h-full' src='../images/docusaurus.png' placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt='docusaurus' />
          <div id='docusaurus-content' className='absolute top-0 left-0 p-4 w-full h-full'>
            <div className='w-full h-full p-2 border-[1px] border-stone-400'>
              <p className='docusaurus-text'>
                Build optimized websites quickly, focus on your content
              </p>
            </div>
          </div>
        </>
      ) : (<></>)}
      {astro ? (
        <>
          <StaticImage className='blur-sm absolute top-0 left-0 w-full h-full' src='../images/astro.jpg' placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt='astro' />
          <div id='astro-content' className='absolute top-0 left-0 p-4 w-full h-full'>
            <div className='w-full h-full p-2 border-[1px] border-stone-400 text-stone-200'>
              <p className='astro-text'>
                The web framework that scales with you Astro builds fast content sites, powerful web applications, dynamic server APIs, and everything in-between.
              </p>
            </div>
          </div>
        </>
      ) : (<></>)}
      {qwik ? (
        <>
          <StaticImage className='blur-sm absolute top-0 left-0 w-full h-full' src='../images/qwik.png' placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt='qwik' />
          <div id='qwik-content' className='absolute top-0 left-0 p-4 w-full h-full'>
            <div className='w-full h-full p-2 border-[1px] border-stone-400'>
              <p className='qwik-text'>
                Deliver instant apps at scale Build instantly-interactive web apps without effort.
              </p>
            </div>
          </div>
        </>
      ) : (<></>)}
      {cuttlebelle ? (
        <>
          <StaticImage className='blur-sm absolute top-0 left-0 w-full h-full' src='../images/cuttlebelle.jpg' placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt='cuttlebelle' />
          <div id='cuttlebelle-content' className='absolute top-0 left-0 p-4 w-full h-full'>
            <div className='w-full h-full p-2 border-[1px] border-stone-400'>
              <p className='cuttlebelle-text'>
                The react static site generator that separates editing and code concerns
              </p>
            </div>
          </div>
        </>
      ) : (<></>)}
    </div>
  );
};