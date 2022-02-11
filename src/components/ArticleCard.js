import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleCard = function ({ votes, topic, article_id, title, author }) {
  return (
    <div className='box'>
      <article className="media">
        <div className="media-left">
          <span className="voteCount">{votes}</span>
        </div>
        <div className="media-content">
          <div className="content">
            <span className="topic">{topic}</span>
            <Link to={'/articles/' + article_id}>
              <h2 className="title is-3">{title}</h2>
              <span className="subtitle is-6">by {author}</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  article_id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default ArticleCard;
