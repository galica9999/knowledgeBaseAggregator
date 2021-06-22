import React, { useState } from 'react';
import axios from 'axios';

const EditArticle = ({
  index,
  category,
  isAdmin,
  cat,
  onCancel,
  onSave,
  articleKeys,
}) => {
  const [newCat, setNewCat] = useState(category.keyName || cat.id);
  const [newLink, setNewLink] = useState(category.url);
  const [newName, setNewName] = useState(category.name);
  const oldCat = category.keyName || cat.id;
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSave = (category) => {
    if (newCat === 'Please Select a Category') {
      return;
    } else {
      setIsLoading(true);
      async function updateArticle(category) {
        try {
          //post here
          let parsedResponse = JSON.parse('response');
          if (
            parsedResponse ===
            'updated article category, please refesh to check'
          ) {
            onSave(category, newCat);
            alert('updated article, please refesh to check');
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
      updateArticle(category, newCat);
    }
  };
  return (
    <div
      className={`panel panel--raised ${
        index % 2 === 0 ? 'panel--primary' : 'panel--info'
      } no-padding-top no-padding-bottom half-margin-top half-margin-bottom flex flex-between`}
      key={category.url}
    >
      <div className="row">
        <div
          className={`col-4 half-padding-top half-padding-bottom half-padding-left flex-center form-group`}
        >
          <div className="form-group__text ">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            ></input>
          </div>
        </div>
        <div
          className={`col-4 half-padding-top half-padding-bottom half-padding-left flex-center form-group `}
        >
          <div className="form-group__text">
            <input
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
            ></input>
          </div>
        </div>
        <div
          className={`col-2 text-left  half-margin-top half-margin-bottom flex-middle `}
          style={{ borderLeft: 'solid' }}
        >
          <div className="form-group dropdown">
            <div className="form-group__text select">
              <select
                name="category"
                id="category"
                value={newCat}
                onChange={(e) => setNewCat(e.target.value)}
              >
                <option value="Please Select a Category">
                  Please Select a Category
                </option>
                {articleKeys.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>
              {/* <label htmlFor="category">Select Category: </label> */}
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="col-2 text-center flex-middle flex-center">
            <div
              className="loading-dots loading-dots--success"
              aria-label="Loading, please wait..."
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <>
            <div
              className="col-1 text-center flex-middle flex-center hover-engrave--small"
              style={{ backgroundColor: '#6c757d', borderLeft: 'solid' }}
              onClick={() => handleOnSave(category)}
            >
              <i className="icon-save icon-size-24 text-success"></i>
            </div>
            <div
              className="col-1 text-center flex-middle flex-center hover-engrave--small"
              style={{ backgroundColor: '#6c757d', borderLeft: 'solid' }}
              onClick={() => onCancel(category)}
            >
              <i className="icon-exit icon-size-24 text-danger"></i>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditArticle;
