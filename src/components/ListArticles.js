import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import axios from 'axios';
import EditArticle from './EditArticle';
import ShowArticle from './ShowArticle';

const ListArticles = ({ article, isAdmin, articleKeys }) => {
  const [editing, setEditing] = useState();
  const cat = useParams();
  let location = useLocation();

  const arr =
    location.pathname === '/'
      ? Object.entries(article).flatMap((entry) => {
          const [key, value] = entry;
          const arr = value.map((cat) => ({ ...cat, keyName: key }));
          return arr;
        })
      : article[cat.id];
  const [filteredData, setFilteredData] = useState(arr);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = arr.filter((data) => {
      let splitVal = value.split(' ');
      let allTrue = true;
      for (let i = 0; i < splitVal.length; i++) {
        if (data.name.toLowerCase().indexOf(splitVal[i]) === -1) {
          allTrue = false;
        }
      }
      return allTrue;
    });
    setFilteredData(result);
  };

  const handleEdit = (category) => {
    setEditing(category);
  };
  const onCancel = (category) => {
    setEditing('');
  };
  const onSave = (category, newCat) => {
    setEditing('');
  };

  return (
    <div className="tab-pane active">
      <h3 className="text-center">
        {location.pathname === '/' ? 'All Articles' : cat.id}
      </h3>
      <div className="form-group base-margin-bottom base-margin-right base-margin-left">
        <div className="form-group__text">
          <input id="search" type="text" onChange={(e) => handleSearch(e)} />
          <label htmlFor="search">Search:</label>
        </div>
      </div>
      <ul className="base-margin-right" style={{ overflow: 'hidden' }}>
        {filteredData.map((category, index) =>
          editing === category ? (
            <EditArticle
              isAdmin={isAdmin}
              category={category}
              articleLink={category.url}
              articleName={category.name}
              index={index}
              cat={cat}
              handleEdit={handleEdit}
              onCancel={onCancel}
              onSave={onSave}
              articleKeys={articleKeys}
              key={category.url}
            />
          ) : (
            <ShowArticle
              isAdmin={isAdmin}
              category={category}
              articleLink={category.url}
              articleName={category.name}
              index={index}
              cat={cat}
              handleEdit={handleEdit}
              key={category.url}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default ListArticles;
