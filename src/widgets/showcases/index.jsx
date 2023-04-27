import React from 'react';
import { ParallaxList } from './ui/parallaxList';
import classNames from 'classnames';
import { useMediaLayout } from 'shared/hooks/mobile';
import { MobileGallery } from './ui/mobileGallery';

/**
 * Hello world, this is how I working
 * if you like my skills,
 * Be sure to contact me!
 * Have a great day 🥑🔥
 * @author Bohdan Ly
 */

export const Showcases = () => {
  const isMobile = useMediaLayout();

  const mousePosition = React.useRef(null);
  const prevPercentage = React.useRef(0);
  const percentage = React.useRef(0);
  const [grabbing, setGrabbing] = React.useState(false);

  const handleMouseUp = () => {
    mousePosition.current = null;
    prevPercentage.current = percentage.current;
    setGrabbing(false);
  };

  React.useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleTrackMouseMove = (e) => {
    if (isNaN(parseInt(mousePosition.current))) return;

    const mouseDelta = parseFloat(mousePosition.current) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const curPercentage = ((mouseDelta / maxDelta) * -100) / 2,
      nextPercentage = prevPercentage.current + curPercentage;

    const images = document.querySelectorAll('.showcases-image');

    if (images) {
      const normalizedPercentage = Math.max(Math.min(nextPercentage, 0), -120);
      percentage.current = normalizedPercentage;

      for (let image of images) {
        image.animate(
          {
            objectPosition: `${100 + Math.max(normalizedPercentage, -100)}% 50%`,
          },
          { duration: 1200, fill: 'forwards' },
        );
      }
    }
  };

  const handleMouseDown = (e) => {
    mousePosition.current = e.clientX;
    setGrabbing(true);
  };

  if (isMobile) {
    return <MobileGallery />;
  }

  return (
    <div
      className={classNames('w-full relative z-10', {
        'cursor-grab': !grabbing,
        'cursor-grabbing': grabbing,
      })}
      onMouseMove={handleTrackMouseMove}
      onMouseDown={handleMouseDown}
    >
      <ParallaxList />
    </div>
  );
};
