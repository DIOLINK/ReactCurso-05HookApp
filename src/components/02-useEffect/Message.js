import React, { useEffect, useState } from 'react';

const Message = () => {
  const [coors, setCoors] = useState({ x: 0, y: 0 });
  const { x, y } = coors;
  useEffect(() => {
    const mouseMove = (e) => {
      const coors = { x: e.x, y: e.y };
      setCoors(coors);
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      console.log('componente desmontado');
    };
  }, []);
  return (
    <div>
      <h3>Eres genial!</h3>
      <p>
        x:{x} y:{y}
      </p>
    </div>
  );
};

export default Message;
