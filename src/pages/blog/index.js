import React, { Component } from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

const MAIN_COLOR = '#303F9F';

export default class BlogIndexPage extends Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url('/img/blog-index.jpg')`,
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: `0.5rem 0 0 ${MAIN_COLOR}, -0.5rem 0 0 ${MAIN_COLOR}`,
                    backgroundColor: MAIN_COLOR,
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  Latest Stories
                </h1>
              </div>
            </div>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
