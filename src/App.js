import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import TopicPage from './components/TopicPage';
import './style.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ArticleList} />
          <Route path='/articles/:article_id' component={ArticlePage} />
          <Route path='/topics/:topic_id/articles' component={TopicPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
