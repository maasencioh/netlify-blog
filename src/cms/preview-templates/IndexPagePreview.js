import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => (
  <IndexPageTemplate
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
    main={{
      mainpitch: {
        title: entry.getIn(['data', 'mainpitch', 'title']),
        description: entry.getIn(['data', 'mainpitch', 'description']),
      },
    }}
  />
);

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
