import React, { useState } from 'react';
import { Link } from 'gatsby';

const Title = ({ children }) => (
  <h1 className="w-auto h-8 text-3xl font-bold leading-tight text-gray-900 sm:h-10">
    {children}
  </h1>
);

const routes = [
  { path: '/about', name: 'Nosotros' },
  { path: '/blog', name: 'Blog' },
];

const Header = ({ title, location }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/" aria-label="Home">
                <Title>{title}</Title>
              </Link>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  aria-expanded={visible}
                  onClick={() => setVisible(true)}
                >
                  <svg
                    className="w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4">
            {routes.map(({ path, name }) => (
              <Link
                to={path}
                key={path}
                className={`${
                  path === location?.pathname
                    ? 'text-green-600 hover:text-green-900 hover:bg-green-50 hover:text-green-900 hover:bg-green-50 focus:text-green-900 focus:bg-green-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50'
                } ml-8 font-medium transition duration-150 ease-in-out`}
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/*
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      */}
      {visible && (
        <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div className="rounded-lg shadow-md">
            <div
              className="overflow-hidden bg-white rounded-lg shadow-xs"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <Title>{title}</Title>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                    aria-label="Close menu"
                    onClick={() => setVisible(false)}
                  >
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                {routes.map(({ path, name }) => (
                  <Link
                    to={path}
                    key={path}
                    className={`${
                      path === location?.pathname
                        ? 'text-green-700 hover:text-green-900 hover:bg-green-50 hover:text-green-900 hover:bg-green-50 focus:text-green-900 focus:bg-green-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50'
                    } block px-3 py-2 mt-1 text-base font-medium transition duration-150 ease-in-out rounded-md focus:outline-none`}
                    role="menuitem"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
