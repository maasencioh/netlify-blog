import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

export const About = () => (
  <div className="py-12 bg-white">
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="text-base font-semibold leading-6 tracking-wide text-green-600 uppercase">
          ¿Quienes somos?
        </p>
        <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Miguel, Paula e Isaac
        </h3>
        <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-600 lg:mx-auto">
          Una familia que quiere hablar sobre lo que creemos y como nuestras
          experiencias nos han llevado a hablar sobre lo que nos interesa.
        </p>
      </div>

      <div className="mt-10">
        <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
          <li>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-md">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6 text-gray-900">
                  Crianza respetuosa
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Tu hijo merece todo respeto y afecto posible, por lo cual no
                  creemos en criar usando el maltrato como guia.
                </p>
              </div>
            </div>
          </li>
          <li className="mt-10 md:mt-0">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-md">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6 text-gray-900">
                  Familia cristiana
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Somos una pareja de esposos que nos identificamos como
                  cristianos, practicantes de la Biblia y guiados por el
                  espíritu santo.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Sobre nosotros" />

      <About />
    </Layout>
  );
};

export default AboutPage;
