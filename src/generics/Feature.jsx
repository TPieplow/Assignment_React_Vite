import React from 'react';

const Feature = ({ iconClass, title, description }) => {
  return (
    <div>
      <i className={ iconClass }>
        <div className="icon-wrapper">
          <i className="fas fa-plus plus1"></i>
          <i className="fas fa-plus plus2"></i>
          <i className="fas fa-plus plus3"></i>
        </div>
      </i>
      <h3>{ title }</h3>
      <p>{ description }</p>
    </div>
  );
};

export default Feature;