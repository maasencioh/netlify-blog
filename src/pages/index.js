import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/Seo';
import { About } from './about';

const IndexPage = ({ location }) => {
  const {
    site: {
      siteMetadata: { title },
    },
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { eq: "family_park.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return (
    <div className="min-h-screen">
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Header title={title} location={location} />
            <main className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Joven familia en
                  <br className="xl:hidden" />
                  <span className="text-green-600"> crecimiento</span>
                </h2>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Sin ninguna experticia ni especialidad más allá de amar a
                  nuestros hijos.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/blog"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green md:py-4 md:text-lg md:px-10"
                    >
                      Leer más
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/about"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-green-700 transition duration-150 ease-in-out bg-green-100 border border-transparent rounded-md hover:text-green-600 hover:bg-green-50 focus:outline-none focus:shadow-outline-green focus:border-green-300 md:py-4 md:text-lg md:px-10"
                    >
                      Conocenos
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://www.instagram.com/growingfamilyfun/"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-green-700 transition duration-150 ease-in-out bg-green-100 border border-transparent rounded-md hover:text-green-600 hover:bg-green-50 focus:outline-none focus:shadow-outline-green focus:border-green-300 md:py-4 md:text-lg md:px-10"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Img
            className="object-cover w-full h-72 sm:h-72 md:h-96 lg:w-full lg:h-full"
            fluid={fluid}
            alt="familia junta en el parque"
          />
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default IndexPage;
