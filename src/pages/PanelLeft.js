import React, { useState, useEffect } from 'react';
import { Switch, NavLink, Route, useLocation } from 'react-router-dom';
import ListArticles from '../components/ListArticles';
import AddArticle from '../components/AddArticle';
import AddCat from '../components/AddCat';
import AddAdmin from '../components/AddAdmin';
import { articleKeys, articles } from '../data';
import axios from 'axios';

const PanelLeft = () => {
  let location = useLocation();
  // const [articles, setArticles] = useState();
  // const [articleKeys, setArticleKeys] = useState();
  const [isAdmin, setIsAdmin] = useState(true); //normally set to false but for this demo it will always be true

  useEffect(() => {
    // usually this would make a axios call to the server to fill in these values below.  But I'm just leaving the set functions so they can be seen
    // let articles = JSON.parse(response);
    // setIsAdmin(response.data.data.variables.result[1]);
    // setArticles(articles);
    // setArticleKeys(Object.keys(articles));
  }, []);

  return (
    <div className="row" style={{ marginTop: '5rem' }}>
      <div className="col-md-3">
        <ul id="vleft" className="tabs tabs--vertical">
          {isAdmin && (
            <li
              id="vleft-4"
              className={`tab ${
                location.pathname === '/article/add/' ? 'active' : ''
              }`}
            >
              <NavLink tabIndex="0" to="/article/add/">
                Add Article (Admin Only)
                <span className="icon-add-outline base-padding-left text-primary"></span>
              </NavLink>
            </li>
          )}
          {isAdmin && (
            <li
              id="vleft-4"
              className={`tab ${
                location.pathname === '/cat/add/' ? 'active' : ''
              }`}
            >
              <NavLink tabIndex="0" to="/cat/add/">
                Add Category (Admin Only)
                <span className="icon-add-outline base-padding-left text-primary"></span>
              </NavLink>
            </li>
          )}
          {isAdmin && (
            <li
              id="vleft-4"
              className={`tab ${
                location.pathname === '/admin/add/' ? 'active' : ''
              }`}
            >
              <NavLink tabIndex="0" to="/admin/add/">
                Add Admin (Admin Only)
                <span className="icon-add-outline base-padding-left text-primary"></span>
              </NavLink>
            </li>
          )}
          <li
            id="vleft-1"
            className={`tab ${location.pathname === '/' ? 'active' : ''}`}
          >
            <NavLink tabIndex="0" to="/">
              All Articles
            </NavLink>
          </li>
          <hr />
          {/* Loop to get more of these */}
          {articleKeys
            ? articleKeys.map((article) => (
                <li
                  key={article}
                  id="vleft-2"
                  className={`tab ${
                    location.pathname === '/article/' ? 'active' : ''
                  }`}
                >
                  <NavLink tabIndex="0" to={`/article/${article}`}>
                    {article}
                  </NavLink>
                </li>
              ))
            : ''}
        </ul>
      </div>
      <div className="col-md-9">
        <div
          id="vleft-content"
          className={`tab-content ${
            !articles ? 'flex flex-middle flex-center' : ''
          }`}
          style={!articles ? { height: '100%' } : {}}
        >
          {articles ? (
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <ListArticles
                    article={articles}
                    isAdmin={isAdmin}
                    articleKeys={articleKeys}
                  />
                )}
              />
              {isAdmin && (
                <Route
                  exact
                  path="/admin/add/"
                  component={() => (
                    <AddAdmin article={articleKeys} isAdmin={isAdmin} />
                  )}
                />
              )}
              {isAdmin && (
                <Route
                  exact
                  path="/cat/add/"
                  component={() => (
                    <AddCat article={articleKeys} isAdmin={isAdmin} />
                  )}
                />
              )}
              {isAdmin && (
                <Route
                  exact
                  path="/article/add/"
                  component={() => (
                    <AddArticle article={articleKeys} isAdmin={isAdmin} />
                  )}
                />
              )}

              <Route
                exact
                path="/article/:id"
                component={() => (
                  <ListArticles
                    article={articles}
                    isAdmin={isAdmin}
                    articleKeys={articleKeys}
                  />
                )}
              />
            </Switch>
          ) : (
            <div className="flex flex-middle flex-center">
              <div
                className="loader loader--large"
                aria-label="Loading, please
                wait..."
              >
                <div className="wrapper">
                  <div className="wheel"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PanelLeft;
