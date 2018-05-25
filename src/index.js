import createBrowserHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './App';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import TopicPage from './components/TopicPage';
import reducer from './reducer/reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk));
const history = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path='/' component={ArticleList} />
          <Route path='/articles/:article_id' component={ArticlePage} />
          <Route path='/topics/:topic_id/articles' component={TopicPage} />
        </Switch>
      </App>
    </Router>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
