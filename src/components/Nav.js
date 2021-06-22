import React from 'react';

const Nav = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="header-panels">
          <div className="header-panel">
            <a className="header__logo" href="http://www.google.com" target="">
              <span className="icon-bug"></span>
            </a>
            <div className="header__title">Knowledge Base Articles</div>
          </div>
          <div className="header-panel header-panel--right">
            <a className="header-item" href="mailto:galica9999@hotmail.com">
              Created By: Ryan MacLennan
            </a>
            <a
              class="header-item icon-email"
              href="mailto:galica9999@hotmail.com"
            ></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
