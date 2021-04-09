import React, { useState } from 'react';

const Description = ({ title, content, maxHeight }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="col-12 py-2 position-relative"
      style={{ ...!expanded && maxHeight, overflowY: 'hidden' }}
    >
      <div>
        <h4>{title}</h4>
      </div>
      <div className="col-12">{content}</div>
      {maxHeight
      && (
      <button
        type="button"
        className="btn btn-primary position-absolute py-0 px-1"
        style={{ bottom: '0.5rem', right: '0.5rem' }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '-' : '+'}
      </button>
      )}
    </div>
  );
};

export default Description;
