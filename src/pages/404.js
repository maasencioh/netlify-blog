import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const NotFoundPage = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  return (
    <Layout title={title}>
      <SEO title="404: Not Found" />

      <div class="flex items-center justify-center h-full">
        <div className="max-w-sm p-4 overflow-hidden rounded shadow-lg sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-green-600 sm:text-5xl sm:leading-none md:text-6xl">
            Página imaginaria
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Lamento mucho que no encontraras lo que buscabas, pero en
            <Link
              className="px-1 text-green-700 hover:text-green-500"
              to="/blog"
            >
              nuestro blog
            </Link>
            seguro encontrarás algo interestante!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
