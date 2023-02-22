import React, { memo } from 'react';

const UseCallBackBtns = ({ onInc }) => {
  return (
    <div>
      <button className="btn" onClick={() => onInc(parseInt(6))}>
        +6
      </button>
      <button className="btn" onClick={() => onInc(parseInt(12))}>
        +12
      </button>
      <button className="btn" onClick={() => onInc(parseInt(18))}>
        +18
      </button>
    </div>
  );
};

export default memo(UseCallBackBtns);
