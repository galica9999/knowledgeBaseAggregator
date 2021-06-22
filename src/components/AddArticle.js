import React, { useState } from 'react';
import axios from 'axios';

const AddArticle = ({ article, isAdmin }) => {
  const [articleLink, setArticleLink] = useState('');
  const [articleName, setArticleName] = useState('');
  const [articleCat, setArticleCat] = useState('Please Select a Category');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const linkCheckRegex = /https:\/\/\.google\.com(.+)/;
  // const [selectValidate, setSelectValidate] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (articleCat === 'Please Select a Category') {
      return;
    }
    if (articleName === '') {
      return;
    }
    if (articleLink === '') {
      return;
    }

    setIsLoading(true);

    async function addArticle(link, name, category) {
      try {
        //post call is usually here
        setArticleCat('Please Select a Category');
        setArticleName('');
        setArticleLink('');
        setIsLoading(false);
        let parsedResponse = JSON.parse('response');
        if (parsedResponse === 'database updated, please refresh') {
          alert('article added, please refresh');
        } else {
          setIsError(true);
          alert(parsedResponse);
        }
        return 'response';
      } catch (error) {
        setIsError(true);
        alert(error);
      }
    }
    addArticle(articleLink, articleName, articleCat);
  };

  return (
    <div>
      {isAdmin ? (
        <div className="tab-pane active">
          <h3 className="text-center">Add Article</h3>
          <form className="base-margin-right" onSubmit={handleSubmit}>
            <div className="form-group dropdown base-margin-top">
              <div className="form-group__text select">
                <select
                  name="category"
                  id="category"
                  value={articleCat}
                  onChange={(e) => setArticleCat(e.target.value)}
                >
                  <option value="Please Select a Category">
                    Please Select a Category
                  </option>
                  {article.map((category) => (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <label htmlFor="category">Select Category: </label>
              </div>
              {articleCat === 'Please Select a Category' && (
                <div className="form-group__help">
                  <span className="text-danger">
                    Please select a valid category
                  </span>
                </div>
              )}

              <div className="form-group__text base-margin-top">
                <input
                  id="input-layout-stacked-1"
                  placeholder="https://google.com/example"
                  type="text"
                  value={articleLink}
                  onChange={(e) => setArticleLink(e.target.value)}
                />
                <label htmlFor="input-layout-stacked-1">Article URL:</label>
              </div>
              {!articleLink.match(linkCheckRegex) && (
                <div className="form-group__help">
                  <span className="text-danger">
                    Please input a article link
                  </span>
                </div>
              )}
              <div className="form-group__text base-margin-top">
                <input
                  id="input-layout-stacked-2"
                  placeholder="Google-Thing"
                  type="text"
                  value={articleName}
                  onChange={(e) => setArticleName(e.target.value)}
                />
                <label htmlFor="input-layout-stacked-2">Name of Article:</label>
              </div>
              {articleName === '' && (
                <div class="form-group__help">
                  <span className="text-danger">
                    Please input a article name
                  </span>
                </div>
              )}
              <div className="form-group__help">
                <span>
                  The name should be the same as the link with the dashes
                  included, no spaces please.
                </span>
              </div>
              <div className="flex flex-center">
                {isLoading ? (
                  <div
                    class="loading-dots dbl-margin-top"
                    aria-label="Loading, please wait..."
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  <input
                    type="submit"
                    value={isError ? 'Error' : 'Submit'}
                    className={`btn btn--large ${
                      isError ? 'btn--danger' : 'btn--primary'
                    } base-margin-top`}
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      ) : (
        alert('You are not an admin')
      )}
    </div>
  );
};

export default AddArticle;
