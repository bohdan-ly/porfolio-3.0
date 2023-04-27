import classNames from 'classnames';
import React from 'react';

export const Page = ({
  title = '',
  bg = 'bg-zinc-200',
  titleColor = 'text-metallic',
  className,
  titleClassName,
  children,
}) => {
  return (
    <section
      className={classNames(className, bg, {
        'p-6': !className,
      })}
    >
      <div className="my-32 mx-auto max-w-7xl lg:px-8">
        <h2
          className={classNames(titleClassName, titleColor, {
            'text-5xl xl:text-6xl leading-tight font-extrabold text-center capitalize':
              !titleClassName,
          })}
        >
          {title}
        </h2>
        <div className="w-full mt-28">{children}</div>
      </div>
    </section>
  );
};
