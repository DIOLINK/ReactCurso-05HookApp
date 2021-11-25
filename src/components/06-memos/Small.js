import React, { memo } from 'react';

const Small = memo(({ value }) => {
  console.log('Se llama XD');
  return <small>{value}</small>;
});

export default Small;
