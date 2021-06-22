import React, { useState } from 'react';
import axios from 'axios';

const AddCat = ({ article, isAdmin }) => {
  const [articleCat, setArticleCat] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (articleCat === '') {
      return;
    }
    if (article.includes(articleCat)) {
      alert('Category already exists');
      return;
    }

    setIsLoading(true);

    async function AddCat(category) {
      try {
        //post is here usually
        setArticleCat('');

        setIsLoading(false);
        let parsedResponse = JSON.parse('response');
        if (parsedResponse === 'category created') {
          alert('category added, please refresh');
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
    AddCat(articleCat);
  };

  return (
    <div>
      {isAdmin ? (
        <div className="tab-pane active">
          <h3 className="text-center">Add Category</h3>
          <form className="base-margin-right" onSubmit={handleSubmit}>
            <div className="form-group dropdown base-margin-top">
              <div className="form-group__text base-margin-top">
                <input
                  id="input-layout-stacked-2"
                  placeholder="access"
                  type="text"
                  value={articleCat}
                  onChange={(e) => setArticleCat(e.target.value)}
                />
                <label htmlFor="input-layout-stacked-2">
                  article Category:
                </label>
              </div>
              {articleCat === '' && (
                <div class="form-group__help">
                  <span className="text-danger">
                    Please input a new article category
                  </span>
                </div>
              )}
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

export default AddCat;
