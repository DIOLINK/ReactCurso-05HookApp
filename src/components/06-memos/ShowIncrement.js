import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ShowIncrement = memo(({ increment }) => {
  console.log('Render');
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      increment
    </button>
  );
});
ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};
export default ShowIncrement;
