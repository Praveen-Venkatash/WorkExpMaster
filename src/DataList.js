import { useState, useRef, useEffect } from 'react';
import DataItem from './DataItem';

function DataList({data}) {
  return (
    <body>
    <div>
      {data.map((product, idx) => (
        <DataItem key={idx} product={product} />
      ))}
    </div>
    </body>
  );
}

export default DataList;