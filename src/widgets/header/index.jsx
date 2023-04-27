import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/components';
import { useOnClickOutside } from 'usehooks-ts';

export const Header = ({ toggleTheme }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);

  const theme = JSON.parse(localStorage.getItem('darkTheme') || 'false');

  const headerRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const burgerRef = React.useRef(null);

  useOnClickOutside(menuRef, (e) => {
    if (burgerRef.current) {
      if (burgerRef.current.contains(e.target)) return;
      setShowMenu(false);
    }
  });

  const showHeaderOnScroll = (e) => {
    if (
      e.currentTarget.pageYOffset > 790 &&
      headerRef.current &&
      ![...headerRef.current.classList].includes('show')
    ) {
      headerRef.current.classList.add('show', 'bg-white', 'dark:bg-editor-dark');
    }

    if (
      e.currentTarget.pageYOffset < 750 &&
      headerRef.current &&
      [...headerRef.current.classList].includes('show')
    ) {
      headerRef.current.classList.remove('show', 'bg-white', 'dark:bg-editor-dark');
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', showHeaderOnScroll);
    return () => {
      window.removeEventListener('scroll', showHeaderOnScroll);
    };
  }, []);

  const linkNav = (e, path) => {
    e.preventDefault();
    setShowMenu(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header
      ref={headerRef}
      className={classNames(
        'portfolio-header bg-transparent absolute dark:text-white w-full overflow-hidden z-20',
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" onClick={(e) => linkNav(e, '/')} className="-m-1.5 p-1.5">
            <span className="sr-only">Bohdan Ly portfolio</span>
            <img className="h-auto w-20 scale-150 grayscale" src="/logo.png" alt="logo" />
          </a>
        </div>
        <div className="flex relative lg:hidden">
          <button
            ref={burgerRef}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {showMenu &&
            createPortal(
              <div
                ref={menuRef}
                id="user-dropdown"
                className={classNames(
                  'z-50 top-16 right-10 fixed border transition-all flex flex-col lg:hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow',
                )}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">Bohdan Ly</span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    bohdan.ly.v@gmail.com
                  </span>
                  <Button
                    className="cursor-pointer mt-4"
                    title={
                      theme ? (
                        <SunIcon className="text-orange-400 h-6 w-6" />
                      ) : (
                        <MoonIcon className="text-indigo-400 h-6 w-6" />
                      )
                    }
                    onClick={toggleTheme}
                  />
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="/"
                      onClick={(e) => linkNav(e, '/')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {t('Home')}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/about"
                      onClick={(e) => linkNav(e, '/about')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {t('About Me')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/showcases"
                      onClick={(e) => linkNav(e, '/showcases')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {t('Showcase')}
                    </a>
                  </li>
                </ul>
              </div>,
              document.body,
            )}
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="/"
            onClick={(e) => linkNav(e, '/')}
            className="text-md font-semibold leading-6 text-gray-900 dark:text-white"
          >
            {t('Home')}
          </a>
          <a
            href="/about"
            onClick={(e) => linkNav(e, '/about')}
            className="text-md font-semibold leading-6 text-gray-900 dark:text-white"
          >
            {t('About Me')}
          </a>
          <a
            href="/showcases"
            onClick={(e) => linkNav(e, '/showcases')}
            className="text-md font-semibold leading-6 text-gray-900 dark:text-white"
          >
            {t('Showcase')}
          </a>
        </div>

        <div className="hidden lg:flex lg:justify-end ml-6 pl-4 border-2 border-transparent dark:border-l-white border-l-gray-900">
          <Button
            className="cursor-pointer"
            title={
              theme ? (
                <SunIcon className="text-orange-400 h-6 w-6" />
              ) : (
                <MoonIcon className="text-indigo-400 h-6 w-6" />
              )
            }
            onClick={toggleTheme}
          />
        </div>
      </nav>
    </header>
  );
};
