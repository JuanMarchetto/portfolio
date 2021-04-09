import React, { useState } from 'react';

const Carrusel = ({ title, childs }) => {
  const [currentChild, SetCurrenChild] = useState(0);
  const getPreviusChild = (child) => (childs[child - 1] ? child - 1 : childs.length - 1);
  const getNextChild = (child) => (childs[child + 1] ? child + 1 : 0);
  const displaychilds = [
    childs[getPreviusChild(getPreviusChild(currentChild))],
    childs[getPreviusChild(currentChild)],
    childs[currentChild],
    childs[getNextChild(currentChild)],
    childs[getNextChild(getNextChild(currentChild))],
  ];
  return (
    <>
      {title
    && (
    <div className="col-12 my-3">
      <h4>{title}</h4>
    </div>
    )}
      <div className="row">
        <button type="button" label="getPreviusChild" onClick={() => SetCurrenChild(getPreviusChild)} onKeyDown={() => SetCurrenChild(getPreviusChild)}>
          {'<'}
        </button>
        {displaychilds.map(({
          slideTitle, img, url, description,
        }, index) => (
        // eslint-disable-next-line react/jsx-no-target-blank
          <a target="_blank" href={url} className={`col${(index === 0 || index === 4) ? ' d-none d-lg-block' : ''}`}>
            <img src={img} alt={description} />
            <h5>{slideTitle}</h5>
          </a>
        ))}
        <button type="button" label="getNextChild" onClick={() => SetCurrenChild(getNextChild)} onKeyDown={() => SetCurrenChild(getNextChild)}>
          {'>'}
        </button>
      </div>
    </>
  );
};

export default Carrusel;
