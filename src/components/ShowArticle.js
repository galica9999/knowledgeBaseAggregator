import React from 'react';

const ShowArticle = ({
  index,
  category,
  isAdmin,
  setEditing,
  cat,
  editing,
  handleEdit,
}) => {
  return (
    <div
      className={`panel panel--raised ${
        index % 2 === 0 ? 'panel--primary' : 'panel--info'
      } no-padding-top no-padding-bottom half-margin-top half-margin-bottom flex flex-between`}
      key={category.url}
    >
      <div className="row">
        <div
          className={`${
            isAdmin ? 'col-9' : 'col-10'
          } half-padding-top half-padding-bottom flex-middle`}
        >
          <a
            className=""
            href={category.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {category.name.replaceAll('-', ' ')}
          </a>
        </div>

        <div
          className={`${
            isAdmin ? 'col-2' : 'col-1'
          } text-left  half-margin-top half-margin-bottom flex-middle
                `}
          style={{ borderLeft: 'solid' }}
        >
          {category.keyName || cat.id}
        </div>
        {isAdmin && (
          <div
            className="col-1 text-center flex-middle flex-center hover-engrave--small"
            style={{ backgroundColor: '#6c757d' }}
            onClick={() => handleEdit(category)}
          >
            <i className="icon-edit icon-size-24"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowArticle;
