import {
  Battery50Icon,
  BellSlashIcon,
  FingerPrintIcon,
  WifiIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeScreen = () => {
  // const navigate = useNavigate();

  // const linkNav = (e, path) => {
  //   e.preventDefault();
  //   navigate(path);
  //   window.scrollTo(0, 0);
  // };

  return (
    <div className="flex items-center justify-center h-[170px] w-[250px] relative z-20">
      <div className="absolute top-4 w-full flex justify-end px-3">
        <div className="flex gap-2">
          <BellSlashIcon className="h-2 w-2 text-gray-300" />
          <Battery50Icon className="h-2 w-2 text-gray-300" />
          <WifiIcon className="h-2 w-2 text-gray-300" />
        </div>
      </div>
      <a href="/about">
      <div className="group pointer-events-auto cursor-pointer">
        <div className="flex flex-col border transition-all dark:border-white rounded-full p-[2px] group-hover:border-indigo-700">
          <FingerPrintIcon className="h-3 w-3 text-white transition-all group-hover:text-indigo-700" />
        </div>
      </div>
      </a>
    </div>
  );
};
