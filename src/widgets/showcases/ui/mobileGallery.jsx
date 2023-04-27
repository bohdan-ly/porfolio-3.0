import React from 'react';
import { showcases } from './parallaxList';
import { ShowcaseCard } from './showcaseCard';
import classNames from 'classnames';

export const MobileGallery = () => {
  return (
    <div className="flex flex-wrap">
      {showcases.map((s, idx) => (
        <div key={s.img} className={classNames('p-1 md:p-2 w-full')}>
          <ShowcaseCard {...s} />
        </div>
      ))}
    </div>
  );
};
