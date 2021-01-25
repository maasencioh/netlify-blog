import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "es")
            title
            description
          }
        }
      }
    }
  }
`;

const Blog = ({
  data: {
    allMdx: { edges: posts },
  },
  location,
}) => {
  return (
    <Layout location={location}>
      <SEO title="Todas las entradas" />
      <div className="py-12 bg-white">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
              Nuestro blog
            </h3>
            <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-600 lg:mx-auto">
              Te damos la bienvenida a nuestro blog, donde esperamos que
              encuentres ayuda, entretención, datos curiosos y herramientas para
              este camino tan agradable de ser familia
            </p>
          </div>

          <div className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <li className="mt-10 md:mt-0" key={node.fields.slug}>
                    <div className="flex">
                      <div className="ml-4">
                        <span className="mt-2 text-sm leading-6 text-gray-600">
                          {node.frontmatter.date}
                        </span>
                        <h4 className="text-lg font-medium leading-6 text-green-600 hover:text-green-900">
                          <Link
                            style={{ boxShadow: `none` }}
                            to={`/blog${node.fields.slug}`}
                          >
                            {title} →
                          </Link>
                        </h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              node.frontmatter.description || node.excerpt,
                          }}
                          className="mt-2 text-base leading-6 text-gray-700"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
