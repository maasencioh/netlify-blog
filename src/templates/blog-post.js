import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY", locale: "es")
        description
      }
    }
  }
`;

const BlogPostTemplate = ({
  data: {
    mdx: post,
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
  pageContext: { previous, next },
  location,
}) => (
  <Layout location={location} title={siteTitle}>
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />

    <div className="py-12 bg-white">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-green-800 sm:text-4xl sm:leading-10">
            {post.frontmatter.title}
          </h1>
          <span className="mt-2 text-sm leading-6 text-gray-600">
            {post.frontmatter.date}
          </span>
        </div>
        <div className="max-w-4xl mt-4 text-base leading-7 text-gray-900 lg:mx-auto blog-content">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </div>
    </div>
    <ul className="flex justify-between max-w-4xl mx-auto">
      <li>
        {previous && (
          <Link
            to={`/blog${previous.fields.slug}`}
            rel="prev"
            className="flex items-center justify-center w-full px-4 py-2 text-base leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green"
          >
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link
            to={`/blog${next.fields.slug}`}
            rel="next"
            className="flex items-center justify-center w-full px-4 py-2 text-base leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green"
          >
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
  </Layout>
);

export default BlogPostTemplate;
