import React from 'react';
import './row.scss';

const Row = ({left, center, right}) => {
  return (
    <div className="row pb-5">
      <div className="col-6">{left}</div>
      {/* <div className="col-4">{center}</div> */}
      <div className="col-6">{right}</div>
    </div>
  );
};

export default Row;