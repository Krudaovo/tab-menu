import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';

export const onChangeTabMenuMatrik = () => {
  gsap.registerPlugin(Observer);
  const tabMenu = document.getElementById('tab-menu');
  const halfW = window.innerWidth / 2;
  const halfY = window.innerHeight / 2;

  Observer.create({
    target: window,
    type: 'pointer',
    onMove: (e) => {
      const x = e.x!;
      const y = e.y!;
      const plusMinusX = halfW - x;
      const plusMinusY = halfY - y;
      const clamp = gsap.utils.clamp(-15, 15);
      gsap.to(tabMenu, {
        rotationX: clamp(plusMinusY),
        rotationY: clamp(plusMinusX),
        ease: 'none',
      });
    },
  });
};
export const contentText = (target: string) => {
  gsap.registerPlugin(SplitText);
  gsap.config({ nullTargetWarn: false });
  const targetText = document.getElementsByClassName(target!);
  const splidetTargetText = new SplitText(targetText, { type: 'chars' });

  gsap.fromTo(splidetTargetText.chars, {
    scale: 0,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    stagger: .0125,
  })
};