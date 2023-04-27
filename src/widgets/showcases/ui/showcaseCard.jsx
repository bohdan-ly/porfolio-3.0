import React from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { GitHub } from 'shared/components/icons';
import { Button } from 'shared/components';

export const ShowcaseCard = ({ title, img, url, github, summary }) => {
  return (
    <div className="group flex justify-center min-w-[40vmin] min-h-[40vmin] h-full select-none pt-10 lg:p-10 outline-none">
      <div className="relative max-w-sm h-full overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-editor-dark dark:border-gray-700">
        <div className="overflow-hidden h-[25vh] flex rounded-t-lg w-full">
          <img
            className="showcases-image rounded-t-lg w-full h-full object-cover object-left transition-all group-hover:scale-105"
            draggable={false}
            alt={title}
            src={img}
          />
        </div>
        <div className="p-5 md:pb-24">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{summary || ''}</p>
        </div>
        <div className="flex flex-wrap w-full p-5 md:p-0 md:absolute left-5 bottom-5 gap-4">
          {!!url && (
            <a href={url} target="_blank" className="dark:text-white">
              <Button
                title={
                  <>
                    <EyeIcon className="h-6 w-6 mr-4" />
                    View
                  </>
                }
                className="flex items-center border transition-all border-orange-400 hover:bg-orange-500 dark:text-white font-medium text-xl py-2 px-4 rounded-lg"
              />
            </a>
          )}
          <a href={github} target="_blank" className="dark:text-white">
            <Button
              title={
                <>
                  <GitHub className="h-6 w-6 mr-4" />
                  Source
                </>
              }
              className="flex items-center border transition-all border-orange-400 hover:bg-orange-500 dark:text-white font-medium text-xl py-2 px-4 rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <li className="group min-w-[40vmin] min-h-[40vmin] select-none p-10 outline-none">
      <div className="w-full h-full min-h-[40vmin] flex items-center relative rounded-lg overflow-hidden shadow-lg">
        <div className="flex w-full h-10 relative z-10 justify-center gap-20 opacity-0 group-hover:opacity-100 transition-all">
          <a href={url} target="_blank" className="text-white hover:text-orange-500 transition-all">
            <EyeIcon className="h-12 w-12" />
          </a>
          <a
            href={github}
            target="_blank"
            className="h-12 w-12 text-white hover:text-lime-500 transition-all"
          >
            <GitHub />
          </a>
        </div>
        <div className="w-full h-full absolute left-0 top-0 transition-all bg-black/0 group-hover:bg-black/75 z-[1]" />
        <img
          draggable={false}
          className="showcases-image w-full h-full object-cover object-right transition-all hover:scale-105 absolute left-0 top-0"
          alt={title}
          src={img}
        />
      </div>
    </li>
  );
};
