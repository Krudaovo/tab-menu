import React, { useEffect, useState } from 'react';
import TabName from './tab-name';
import Content from './content';

export default function TabMenu() {

  const [nextIsClicked, setNextIsClicked] = useState(false);
  const [gatsbyIsClicked, setGatsbyIsClicked] = useState(false);
  const [docusaurusIsClicked, setDocusaurusIsClicked] = useState(false);
  const [astroIsClicked, setAstroIsClicked] = useState(false);
  const [qwikIsClicked, setQwikIsClicked] = useState(false);
  const [cuttlebelleIsClicked, setCuttlebelleIsClicked] = useState(false);

  const onClickTab = () => {
    const lists = document.getElementsByTagName('li')
    const listArr = Array.from(lists);

    listArr.forEach(list => {
      list!.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const innerText = target.innerText;
        switch (innerText) {
          case 'Next.js':
            setNextIsClicked(true);
            setGatsbyIsClicked(false);
            setDocusaurusIsClicked(false);
            setAstroIsClicked(false);
            setQwikIsClicked(false);
            setCuttlebelleIsClicked(false);
            break;
          case 'Gatsby':
            setNextIsClicked(false);
            setGatsbyIsClicked(true);
            setDocusaurusIsClicked(false);
            setAstroIsClicked(false);
            setQwikIsClicked(false);
            setCuttlebelleIsClicked(false);
            break;
          case 'Docusaurus':
            setNextIsClicked(false);
            setGatsbyIsClicked(false);
            setDocusaurusIsClicked(true);
            setAstroIsClicked(false);
            setQwikIsClicked(false);
            setCuttlebelleIsClicked(false);
            break;
          case 'Astro':
            setNextIsClicked(false);
            setGatsbyIsClicked(false);
            setDocusaurusIsClicked(false);
            setAstroIsClicked(true);
            setQwikIsClicked(false);
            setCuttlebelleIsClicked(false);
            break;
          case 'Qwik':
            setNextIsClicked(false);
            setGatsbyIsClicked(false);
            setDocusaurusIsClicked(false);
            setAstroIsClicked(false);
            setQwikIsClicked(true);
            setCuttlebelleIsClicked(false);
            break;
          case 'Cuttlebelle':
            setNextIsClicked(false);
            setGatsbyIsClicked(false);
            setDocusaurusIsClicked(false);
            setAstroIsClicked(false);
            setQwikIsClicked(false);
            setCuttlebelleIsClicked(true);
            break;
        }
      });
    });
  }

  useEffect(() => {
    onClickTab()
  }, [])

  return (
    <>
      <div className='w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='w-full h-full animate-material-shadow-md'>
          <TabName
            next={nextIsClicked}
            gatsby={gatsbyIsClicked}
            docusaurus={docusaurusIsClicked}
            astro={astroIsClicked}
            qwik={qwikIsClicked}
            cuttlebelle={cuttlebelleIsClicked} />
          <Content
            next={nextIsClicked}
            gatsby={gatsbyIsClicked}
            docusaurus={docusaurusIsClicked}
            astro={astroIsClicked}
            qwik={qwikIsClicked}
            cuttlebelle={cuttlebelleIsClicked} />
        </div>
      </div>
    </>
  );
};